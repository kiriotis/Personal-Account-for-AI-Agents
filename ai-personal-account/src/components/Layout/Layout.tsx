import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

interface iLayout {}

export default function Layout({}: iLayout) {
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
        <Outlet />
      </Box>
    </Box>
  );
}
