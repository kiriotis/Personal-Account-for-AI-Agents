import { Box, Button, ButtonGroup, Card, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import LoginForm, { iLoginUser } from '../../components/Forms/LoginForm';
import Logo from '../../components/Logo/Logo';
import video_bg from './../../../assets/bg_video.mp4';
import LanguageButton from '../../features/change-language/language-button.feature';

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
      <video
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          filter: 'grayscale(0.5)',
        }}
        autoPlay
        muted={true}
        loop={true}
      >
        <source src={video_bg} type="video/mp4" />
      </video>
      <Card
        sx={{
          width: { xs: '90%', sm: '70%', md: '50%', lg: '30%' },
          boxShadow: 'none',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          zIndex: 99,
          paddingTop: 2,
        }}
      >
        <Logo size="xl" />
        <Box sx={{background:'white', borderRadius: '8px', position: 'fixed', top: 10, right: 10 }}>
          <LanguageButton />
        </Box>
        <LoginForm onSubmit={onSubmit} t={t} />
      </Card>
    </>
  );
}
