import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomLink from '../../utils/links/custom-link';
import Logo from '../Logo/Logo';
import { RoutePaths } from '../../app/routes';

export default function StaticSidebar() {
  const { t } = useTranslation();
  const pagesTabs = [
    {
      name: t('AI ChatBots'),
      link: RoutePaths.TextBots,
      icon: <ModeOutlinedIcon />,
    },
    {
      name: t('AI Voice ChatBots'),
      link: RoutePaths.VoiceBots,
      icon: <RecordVoiceOverOutlinedIcon />,
    },
    { name: t('Usage'), link: RoutePaths.Usage, icon: <ModeOutlinedIcon /> },
    {
      name: t('Company'),
      link: RoutePaths.Company,
      icon: <GroupOutlinedIcon />,
    },
    {
      name: t('Billing'),
      link: RoutePaths.Billing,
      icon: <GroupOutlinedIcon />,
    },
  ];

  let location = useLocation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        width: 250,
        height: '100%', // Занимает всю высоту экрана
        backgroundColor: 'background.paper', // Цвет фона
        '@media (max-width: 600px)': {
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
          <ListItem>
            <Logo />
          </ListItem>
          {pagesTabs.map((el) => {
            return (
              <CustomLink key={el.name} to={el.link}>
                <ListItem
                  disablePadding
                  sx={{
                    bgcolor:
                      location.pathname === el.link
                        ? 'rgba(0, 0, 0, 0.1)'
                        : 'transparent',
                  }}
                >
                  <ListItemButton>
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
