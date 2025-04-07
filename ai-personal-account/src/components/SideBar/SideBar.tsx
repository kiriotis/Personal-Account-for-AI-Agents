import React, { JSX, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import {
  Box,
  Button,
  Divider,
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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface iNavItem {
  name: string;
  link: string;
  icon: JSX.Element;
  enable: boolean;
  divider: boolean;
}

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
      icon: <ChatOutlinedIcon sx={{ fontSize: '2rem' }} />,
      enable: true,
      divider: false,
    },
    {
      name: t('pages.AI Voice ChatBots'),
      link: RoutePaths.VoiceBots,
      icon: <VoiceChatIcon sx={{ fontSize: '2rem' }} />,
      enable: false,
      divider: false,
    },
    {
      name: t('pages.Usage'),
      link: RoutePaths.Usage,
      icon: <QueryStatsIcon sx={{ fontSize: '2rem' }} />,
      enable: true,
      divider: true,
    },
    {
      name: t('pages.Company'),
      link: RoutePaths.Company,
      icon: <GroupOutlinedIcon sx={{ fontSize: '2rem' }} />,
      enable: true,
      divider: false,
    },
    {
      name: t('pages.Billing'),
      link: RoutePaths.Billing,
      icon: <RequestQuoteOutlinedIcon sx={{ fontSize: '2rem' }} />,
      enable: true,
      divider: false,
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
          display: { xs: 'block', sm: 'block', md: 'none' },
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
          height: '100vh',
          backgroundColor: 'background.paper',
          display: { xs: 'none', sm: 'none', md: 'flex' },
        }}
      >
        <List sx={{ px: 1 }}>
          <ListItem sx={{ pb: 6 }}>
            <Logo />
          </ListItem>
          {pagesTabs.map((el) => {
            return (
              <NavItem
                item={{ ...el }}
                extraFunction={() => {}}
                key={el.name}
              />
            );
          })}
        </List>
        <List sx={{ px: 1 }}>
          <CustomLink to={'/'}>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemIcon>
                  <ArrowBackIosNewIcon sx={{ fontSize: '1.5rem' }} />
                </ListItemIcon>
                <ListItemText primary={t('nav.back')} />
              </ListItemButton>
            </ListItem>
          </CustomLink>
        </List>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 275,
            height: '100vh',
          }}
        >
          <List disablePadding sx={{ height: '100%' }}>
            <ListItem sx={{ pb: 6, pl: 6 }}>
              <Logo />
            </ListItem>
            {pagesTabs.map((el) => {
              return (
                <NavItem
                  item={{ ...el }}
                  extraFunction={() => setIsOpen(false)}
                  key={el.name}
                />
              );
            })}
          </List>
          <List sx={{ px: 1 }}>
            <CustomLink to={'/'}>
              <ListItem disablePadding>
                <ListItemButton disableGutters>
                  <ListItemIcon>
                    <ArrowBackIosNewIcon sx={{ fontSize: '1.5rem' }} />
                  </ListItemIcon>
                  <ListItemText primary={t('nav.back')} />
                </ListItemButton>
              </ListItem>
            </CustomLink>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

function NavItem({
  item,
  extraFunction,
}: {
  item: iNavItem;
  extraFunction: () => void;
}) {
  return (
    <>
      <CustomLink
        key={item.name}
        to={item.link}
        disabled={!item.enable}
        extraFunction={extraFunction}
      >
        <ListItem disablePadding>
          <ListItemButton
            disableGutters
            selected={location.pathname === item.link}
            disabled={!item.enable}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      </CustomLink>
      {item.divider && (
        <Divider
          variant="fullWidth"
          sx={{
            mt: 1,
            mb: 1,
            // border: '0.5px solid ',
            borderColor: 'primary.main',
          }}
        />
      )}
    </>
  );
}
