import React from 'react';
import { Box, SvgIcon } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

const Logo: React.FC = () => {
  return (
    <Box sx={{
        display:'flex',
        alignItems:'center',
        padding: '1rem',
        width: '100%',
        paddingBottom: '1rem',
        color: 'primary.main',
        textAlign: 'center',
        lineHeight:'0px'
      }}>
      <SvgIcon component={PublicIcon} style={{ marginRight: '8px' }} />
      <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>AIMPACT</span>
    </Box>
  );
};

export default Logo;
