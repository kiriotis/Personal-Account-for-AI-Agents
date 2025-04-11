import { Box, Card } from '@mui/material';
import LoginForm from '../../components/forms/LoginForm';
import Logo from '../../components/Logo/Logo';
import LanguageButton from '../../features/change-language/language-button.feature';
import video_bg from './../../../assets/video/bg_video.mp4';
import svg_logo from './../../../assets/logo/full_logo.svg';

export default function SignIn() {
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
        {/* <Logo size="xl" /> */}
        <img style={{ width: '250px', height: 'auto'}} src={svg_logo} alt="logo" />
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
        <LoginForm />
      </Card>
    </>
  );
}
