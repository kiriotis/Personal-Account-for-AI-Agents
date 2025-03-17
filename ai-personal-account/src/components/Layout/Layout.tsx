import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { Box, Container } from '@mui/material';

interface iLayout {}

export default function Layout({}: iLayout) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
        padding: 0,
      }}
    >
      <SideBar></SideBar>
      <Outlet />
    </Box>
  );
}
