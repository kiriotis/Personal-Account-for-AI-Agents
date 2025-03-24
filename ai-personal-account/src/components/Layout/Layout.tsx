import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { Box, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

interface iLayout {}

export default function Layout({}: iLayout) {
  const theme = useTheme();
  const location = useLocation();
  const { t } = useTranslation();

  const pageTitles: { [key: string]: string } = {
    '/': t('pages.main'),
    '/text-bots': t('pages.AI ChatBots'),
    '/billing': t('pages.Billing'),
    '/company': t('pages.Company'),
    '/usage': t('pages.Usage'),
    '/voice-bots': t('pages.AI Voice ChatBots'),
    '/sign-in': t('pages.sign-in'),
  };

  const currentPageTitle = pageTitles[location.pathname] || 'Страница';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        padding: 0,
      }}
    >
      <SideBar></SideBar>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: grey[100],
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block',
            },
            padding: '16px',
            pl: 6,

            backgroundColor: grey[200],
            textAlign: 'start',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          }}
        >
          {currentPageTitle}
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: grey[100],
            pt: { xs: 1, sm: 2, lg: 7 },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
