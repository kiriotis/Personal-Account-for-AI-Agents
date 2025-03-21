import { ButtonGroup, Card, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import LoginForm, { iLoginUser } from '../../components/Forms/LoginForm';

export default function SignIn() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const onSubmit = (data: iLoginUser) => {
    alert(data.email + data.password);
    enqueueSnackbar(
      'Пользователь авторизован или не авторизован тут так сказать полномочия все',
      { variant: 'success' }
    );
  };

  return (
    <>
      

      <Card sx={{ width: '30%', boxShadow: 'none', padding: '1rem' }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: '100%',
            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            paddingBottom: '1rem',
            color: 'blue',
          }}
        >
          AIMPACT
        </Typography>
        <LoginForm onSubmit={onSubmit} t={t} />
      </Card>
    </>
  );
}
