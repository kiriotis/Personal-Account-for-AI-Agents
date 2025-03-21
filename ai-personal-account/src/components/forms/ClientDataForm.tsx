import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  IconButton,
  Box,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ChangePasswordPopup from '../Pop-Up/ChangePasswordPopup';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const passwordValidationSchema = Yup.object().shape({
  company: Yup.string().required('Company is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

interface ClientDataFormProps {
  initialData: {
    company: string;
    email: string;
  };
}

const ClientDataForm: React.FC<ClientDataFormProps> = ({ initialData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data: { company: string; email: string }) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Company"
                  variant="standard"
                  error={!!errors.company}
                  helperText={errors.company ? errors.company.message : ''}
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="standard"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Box>
          {isDirty && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isDirty}
            >
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default ClientDataForm;
