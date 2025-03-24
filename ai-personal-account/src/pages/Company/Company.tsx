import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChangePasswordPopup from '../../components/Pop-Up/ChangePasswordPopup';
import LanguageButton from '../../features/change-language/language-button.feature';
import ClientDataForm from '../../components/Forms/ClientDataForm';
import { useTranslation } from 'react-i18next';

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
        overflow: 'scroll',
      }}
    >
<Typography variant="h5" sx={{ mb: 2 }}>
  {t('Information')}
      </Typography>
      <ClientDataForm
        initialData={{
          company: 'PressF',
          email: 'pressf@mail.com',
        }}
      />

<Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
  {t('Security')}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenChangePassword(true)}
        >
          Сменить Пароль
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
    </Box>
  );
}
