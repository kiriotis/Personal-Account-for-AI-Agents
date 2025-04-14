import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormLabel, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ILoginRequest } from '../../interfaces/auth/auth.interface.ts';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { useLoginMutation } from '../../services/auth.service.ts';
import Cookies from 'js-cookie';
import SyncIcon from '@mui/icons-material/Sync';
import { useTranslation } from 'react-i18next';

export interface iLoginUser {
  email: string;
  password: string;
}

function LoginForm() {
  const { t } = useTranslation('translation');
  const [login, { isLoading }] = useLoginMutation();

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
        enqueueSnackbar(t('snackbar.authSuccess'), {
          variant: 'success',
        });
        navigate('/');
      });
  };

  const schema = yup.object<ILoginRequest>().shape({
    email: yup
      .string()
      .email(t('Invalid email'))
      .required(t('Email is required')),
    password: yup
      .string()
      .min(6, t('Password must be at least 6 characters'))
      .required(t('Password is required')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(schema),
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormLabel htmlFor="email">{t('login')}</FormLabel>
      <TextField
        id="email"
        type="email"
        placeholder={t('loginExaple')}
        autoComplete="email"
        defaultValue="usertest@example.com"
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
        defaultValue="string"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      {/* <FormControlLabel
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
      /> */}

      <Button
        loading={isLoading}
        type="submit"
        fullWidth
        variant="contained"
      >
        {t('signIn')}
      </Button>
    </Box>
  );
}

export default LoginForm;
