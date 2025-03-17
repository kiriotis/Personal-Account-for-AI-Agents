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
import CustomLink from '../../utils/links/custom-link';
import { RoutePaths } from '../../app/routes';

export default function StaticSidebar() {
  const pagesTabs = [
    { name: 'AI ChatBots', link: RoutePaths.TextBots, icon: <ModeOutlinedIcon /> },
    {
      name: 'AI Voice ChatBots',
      link: RoutePaths.VoiceBots,
      icon: <RecordVoiceOverOutlinedIcon />,
    },
    { name: 'Usage', link: RoutePaths.Usage, icon: <ModeOutlinedIcon /> },
    { name: 'Company', link: RoutePaths.Company, icon: <GroupOutlinedIcon /> },
    { name: 'Biling', link: RoutePaths.Billing, icon: <GroupOutlinedIcon /> },
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
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            padding: '1rem',
            width: '100%',
            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            paddingBottom: '1rem',
            color: 'blue',
            textAlign: 'center',
          }}
        >
          AIMPACT
        </Typography>
        <List>
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
