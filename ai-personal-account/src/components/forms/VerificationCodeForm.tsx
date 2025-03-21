import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

interface VerificationCodeFormProps {
  onSubmit: (data: { verificationCode: string }) => void;
}

const VerificationCodeForm: React.FC<VerificationCodeFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<{ verificationCode: string }>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name="verificationCode"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Verification Code"
              type="text"
              variant='standard'
              fullWidth
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Confirm
        </Button>
      </Box>
    </form>
  );
};

export default VerificationCodeForm;
