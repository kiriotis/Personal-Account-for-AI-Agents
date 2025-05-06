import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import ChangePasswordPopup from '../../components/Pop-Up/ChangePasswordPopup';
import LanguageButton from '../../features/change-language/language-button.feature';

import { useTranslation } from 'react-i18next';
import ClientDataForm from '../../components/forms/ClientDataForm';

interface iCompany {}

export default function Company({}: iCompany) {
  const { t } = useTranslation();
  const [openChangePassword, setOpenChangePassword] = React.useState(false);

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {t('Information')}
        </Typography>
        <ClientDataForm />

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {t('Security')}
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenChangePassword(true)}
          >
            {t('Change password')}
          </Button>
          {openChangePassword && (
            <ChangePasswordPopup
              open={openChangePassword}
              onClose={() => setOpenChangePassword(false)}
            />
          )}
        </Box>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {t('Accessibility')}
        </Typography>
        <Box>
          <Typography variant="body2">{t('Localization')}</Typography>
          <LanguageButton />
        </Box>
      </Paper>
    </Box>
  );
}
