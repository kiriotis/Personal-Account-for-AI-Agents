import React from 'react';
import ClientDataForm from '../../components/Forms/ClientDataForm';
import { Box } from '@mui/material';

interface iCompany {}

export default function Company({}: iCompany) {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'scroll',
      }}
    >
      <ClientDataForm initialData={{
        company: 'PressF',
        email: 'pressf@mail.com',
        password: 'password'
      }} />
    </Box>
  );
}
