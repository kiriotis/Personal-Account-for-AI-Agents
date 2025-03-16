import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { enqueueSnackbar } from 'notistack';
interface iSignIn {}

export interface iLoginUser {
  email: string;
  password: string;
}

export default function SignIn({}: iSignIn) {
  const { t, i18n } = useTranslation();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('Invalid email'))
      .required(t('Email is required')),
    password: yup
      .string()
      .min(6, t('Password must be at least 6 characters'))
      .required(t('Password is required')),
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: iLoginUser) => {
    alert(data.email + data.password);
    enqueueSnackbar(
      'Пользователь авторизован или не авторизован тут так сказать полномочия все',
      { variant: 'success' }
    );
  };

  return (
    <>
      <ButtonGroup
        variant="text"
        aria-label="Basic button group"
        sx={{ position: 'fixed', top: '2rem', right: '2rem' }}
      >
        <Button onClick={() => changeLanguage('en')}>En</Button>
        <Button onClick={() => changeLanguage('ru')}>RU</Button>
      </ButtonGroup>

      <Card
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '30%', boxShadow: 'none', padding: '1rem' }}
      >
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormLabel htmlFor="email">{t('login')}</FormLabel>
          <TextField
            id="email"
            type="email"
            placeholder={t('loginExaple')}
            autoComplete="email"
            autoFocus
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <FormLabel htmlFor="password">{t('password')}</FormLabel>
          <TextField
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onClick={() => {
                  alert('remember');
                }}
              />
            }
            label={t('Remember')}
          />

          <Button type="submit" fullWidth variant="contained">
            {t('signIn')}
          </Button>
        </Box>
      </Card>
    </>
  );
}
