import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import React, { JSX, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from '../../app/routes';
import { useGetUserQuery } from '../../services/user.service';
import CustomLink from '../../utils/links/custom-link';
import Logo from '../Logo/Logo';

interface iNavItem {
  name: string;
  link: string;
  icon: JSX.Element;
  enable: boolean;
  divider: boolean;
  hidden?: boolean;
}

export default function StaticSidebar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { data: userData } = useGetUserQuery();

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

  const pagesTabs: iNavItem[] = [
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
      hidden: true,
    },
    {
      name: t('pages.Usage'),
      link: RoutePaths.Usage,
      icon: <QueryStatsIcon sx={{ fontSize: '2rem' }} />,
      enable: true,
      divider: true,
    },
    {
      name: userData?.company_name || t('pages.Company'),
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
  if (item.hidden) {
    return null;
  }
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
