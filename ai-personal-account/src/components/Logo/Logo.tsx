import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

const Logo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 'none', sm: 1 },
        alignItems: 'center',
        width: '100%',
        color: 'primary.main',
        textAlign: 'center',
        lineHeight: '0px',
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          '& p': {
            display: 'none',
          },
        },
      }}
    >
      <SvgIcon sx={{fontSize: '3rem'}} component={PublicIcon} />
      <Typography style={{ fontWeight: 'bold', fontSize: '2rem' }}>AIMPACT</Typography>
    </Box>
  );
};

export default Logo;
