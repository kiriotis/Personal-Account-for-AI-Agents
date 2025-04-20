import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface VerificationCodeFormProps {
  onSubmit: (data: { verificationCode: string }) => void;
}

const VerificationCodeForm: React.FC<VerificationCodeFormProps> = ({
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm<{ verificationCode: string }>();
  const { t } = useTranslation('translation');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name="verificationCode"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('changePassword.Verification code')}
              type="text"
              variant="standard"
              fullWidth
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {t('changePassword.Confirm')}
        </Button>
      </Box>
    </form>
  );
};

export default VerificationCodeForm;
