import { Box, Card } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LoginForm, { iLoginUser } from '../../components/forms/LoginForm';
import Logo from '../../components/Logo/Logo';
import LanguageButton from '../../features/change-language/language-button.feature';
import { useLoginMutation } from '../../services/auth.service';
import video_bg from './../../../assets/bg_video.mp4';

export default function SignIn() {
  const { t, i18n } = useTranslation();
  const [login, { isLoading }] = useLoginMutation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const navigate = useNavigate();
  const onSubmit = (data: iLoginUser) => {
    const params = new URLSearchParams();

    params.append('grant_type', 'password');
    params.append('username', data.email);
    params.append('password', data.password);
    params.append('scope', '');
    params.append('client_id', 'string');
    params.append('client_secret', 'string');

    login(params)
      .unwrap()
      .then((data) => {
        Cookies.set('token', data?.access_token as string, { expires: 2 });
        enqueueSnackbar('Вход выполнен', {
          variant: 'success',
        });
        navigate('/');
      });
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
        <Box
          sx={{
            background: 'white',
            borderRadius: '8px',
            position: 'fixed',
            top: 10,
            right: 10,
          }}
        >
          <LanguageButton />
        </Box>
        <LoginForm onSubmit={onSubmit} t={t} />
      </Card>
    </>
  );
}
