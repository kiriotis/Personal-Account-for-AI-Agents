import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
    .required('Confirm password is required'),
});

interface ChangePasswordPopupProps {
  open: boolean;
  onClose: () => void;
}

const ChangePasswordPopup: React.FC<ChangePasswordPopupProps> = ({ open, onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (data: { oldPassword: string; newPassword: string; confirmPassword: string }) => {
    console.log(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
              name="oldPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Old Password"
                  type="password"
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
                  label="New Password"
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
                  label="Confirm Password"
                  type="password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                  fullWidth
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Confirm
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordPopup;
