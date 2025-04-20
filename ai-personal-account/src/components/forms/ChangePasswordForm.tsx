import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@mui/material';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';



interface ChangePasswordFormProps {
  onSubmit: (data: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  onSubmit,
}) => {
  const { t } = useTranslation('translation');

  const changePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required(t('changePassword.Old password is required')),
    newPassword: Yup.string()
      .required(t('changePassword.New password is required'))
      .min(8, t('changePassword.Password must be at least 8 characters'))
      .matches(/[A-Z]/, t('changePassword.Password must contain at least one uppercase letter'))
      .matches(/[a-z]/, t('changePassword.Password must contain at least one lowercase letter'))
      .matches(/[0-9]/, t('changePassword.Password must contain at least one number'))
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        t('changePassword.Password must contain at least one special character')
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
      .required(t('changePassword.Confirm password is required')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name="oldPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('changePassword.Old Password')}
              type="password"
              variant="standard"
              error={!!errors.oldPassword}
              helperText={errors.oldPassword ? errors.oldPassword.message : ''}
              fullWidth
            />
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('changePassword.New Password')}
              variant="standard"
              type="password"
              error={!!errors.newPassword}
              helperText={errors.newPassword ? errors.newPassword.message : ''}
              fullWidth
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('changePassword.Confirm Password')}
              variant="standard"
              type="password"
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : ''
              }
              fullWidth
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          { t("changePassword.Confirm")}
        </Button>
      </Box>
    </form>
  );
};

export default ChangePasswordForm;
