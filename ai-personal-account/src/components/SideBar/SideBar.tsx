import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';
import CustomLink from '../../features/links/custom-link';
export default function StaticSidebar() {
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
        <CustomLink to={'/TextBots'}>
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                location.pathname == '/TextBots'
                  ? 'rgba(0, 0, 0, 0.1)'
                  : 'transparent',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ModeOutlinedIcon></ModeOutlinedIcon>
              </ListItemIcon>
              <ListItemText primary={'Ai ChatBots'} />
            </ListItemButton>
          </ListItem>
        </CustomLink>
        <CustomLink to={'/VoiceBots'}>
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                location.pathname == '/VoiceBots'
                  ? 'rgba(0, 0, 0, 0.1)'
                  : 'transparent',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <RecordVoiceOverOutlinedIcon></RecordVoiceOverOutlinedIcon>
              </ListItemIcon>
              <ListItemText primary={'Ai Voice ChatBots'} />
            </ListItemButton>
          </ListItem>
        </CustomLink>
        <CustomLink to={'/Stats'}>
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                location.pathname == '/Stats'
                  ? 'rgba(0, 0, 0, 0.1)'
                  : 'transparent',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <QueryStatsOutlinedIcon></QueryStatsOutlinedIcon>
              </ListItemIcon>
              <ListItemText primary={'Ai ChatBots'} />
            </ListItemButton>
          </ListItem>
        </CustomLink>
      </div>
      <Divider sx={{ color: 'blue' }} />
      <CustomLink to={'/User'}>
        <ListItem
          disablePadding
          sx={{
            bgcolor:
              location.pathname == '/User'
                ? 'rgba(0, 0, 0, 0.1)'
                : 'transparent',
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupOutlinedIcon></GroupOutlinedIcon>
            </ListItemIcon>
            <ListItemText primary={'Company'} />
          </ListItemButton>
        </ListItem>
      </CustomLink>
      <CustomLink to={'/Billing'}>
        <ListItem
          disablePadding
          sx={{
            bgcolor:
              location.pathname == '/Billing'
                ? 'rgba(0, 0, 0, 0.1)'
                : 'transparent',
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon></AccountBalanceWalletOutlinedIcon>
            </ListItemIcon>
            <ListItemText primary={'Billing'} />
          </ListItemButton>
        </ListItem>
      </CustomLink>
    </Box>
  );
}
