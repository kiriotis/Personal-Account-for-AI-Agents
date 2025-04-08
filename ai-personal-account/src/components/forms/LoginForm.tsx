import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ILoginRequest } from '../../interfaces/auth/auth.interface.ts';

export interface iLoginUser {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: iLoginUser) => void;
  t: (key: string) => string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, t }) => {
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

      <Button type="submit" fullWidth variant="contained">
        {t('signIn')}
      </Button>
    </Box>
  );
};

export default LoginForm;
