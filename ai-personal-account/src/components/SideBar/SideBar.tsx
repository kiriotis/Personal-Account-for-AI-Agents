import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomLink from '../../utils/links/custom-link';
import Logo from '../Logo/Logo';
import { RoutePaths } from '../../app/routes';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LanguageButton from '../../features/change-language/language-button.feature';

export default function StaticSidebar() {
  const { t } = useTranslation();
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
      enable: false,
    },
  ];

  let location = useLocation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Добавлено для распределения элементов
        alignSelf: 'flex-start',
        width: 450,
        height: '100%', // Занимает всю высоту экрана
        backgroundColor: 'background.paper', // Цвет фона
        '@media (max-width: 768px)': {
          width: 60,
          '& .MuiListItemText-root': {
            display: 'none',
          },
          '& .MuiListItemIcon-root': {
            minWidth: 'auto',
          },
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
      </div>
    </Box>
  );
}
