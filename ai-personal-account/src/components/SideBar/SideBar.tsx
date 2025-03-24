import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomLink from '../../utils/links/custom-link';
import Logo from '../Logo/Logo';
import { RoutePaths } from '../../app/routes';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

export default function StaticSidebar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        (event.type === 'keydown' &&
          (event as React.KeyboardEvent).key === 'Tab') ||
        (event as React.KeyboardEvent).key === 'Shift'
      ) {
        return;
      }
      setIsOpen(open);
    };

  const pagesTabs = [
    {
      name: t('pages.AI ChatBots'),
      link: RoutePaths.TextBots,
      icon: <ChatOutlinedIcon />,
      enable: true,
    },
    {
      name: t('pages.AI Voice ChatBots'),
      link: RoutePaths.VoiceBots,
      icon: <VoiceChatIcon />,
      enable: false,
    },
    {
      name: t('pages.Usage'),
      link: RoutePaths.Usage,
      icon: <QueryStatsIcon />,
      enable: true,
    },
    {
      name: t('pages.Company'),
      link: RoutePaths.Company,
      icon: <GroupOutlinedIcon />,
      enable: true,
    },
    {
      name: t('pages.Billing'),
      link: RoutePaths.Billing,
      icon: <RequestQuoteOutlinedIcon />,
      enable: true,
    },
  ];

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer(!isOpen)}
        sx={{
          display: { xs: 'block', sm: 'block',md: 'none' },
          position: 'fixed',
          top: 14,
          left: 16,
          zIndex: 1300,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignSelf: 'flex-start',
          width: 325,
          height: '100%',
          backgroundColor: 'background.paper',
          display: { xs: 'none', sm: 'none', md: 'flex' },
        }}
      >
        <List>
          <ListItem sx={{ pb: 6 }}>
            <Logo />
          </ListItem>
          {pagesTabs.map((el) => {
            return (
              <CustomLink key={el.name} to={el.link} disabled={!el.enable}>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={location.pathname === el.link}
                    disabled={!el.enable}
                  >
                    <ListItemIcon>{el.icon}</ListItemIcon>
                    <ListItemText primary={el.name} />
                  </ListItemButton>
                </ListItem>
              </CustomLink>
            );
          })}
        </List>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 275,
          }}
        >
          <List disablePadding>
            <ListItem sx={{ pb: 6, pl: 6 }}>
              <Logo />
            </ListItem>
            {pagesTabs.map((el) => {
              return (
                <CustomLink
                  key={el.name}
                  to={el.link}
                  disabled={!el.enable}
                  extraFunction={() => {
                    setIsOpen(false);
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={location.pathname === el.link}
                      disabled={!el.enable}
                    >
                      <ListItemIcon>{el.icon}</ListItemIcon>
                      <ListItemText primary={el.name} />
                    </ListItemButton>
                  </ListItem>
                </CustomLink>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
