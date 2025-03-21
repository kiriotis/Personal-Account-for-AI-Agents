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
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    )
    .notOneOf(['12345678', 'qwerty', 'password'], 'Password is too common')
    .test(
      'no-repeated-characters',
      'Password has repeated characters',
      (value) => {
        return !/(.)\1{2,}/.test(value);
      }
    )
    .test('no-spaces', 'Password must not contain spaces', (value) => {
      return !/\s/.test(value);
    }),
});

interface ClientDataFormProps {
  initialData: {
    company: string;
    email: string;
    password: string;
  };
}

const ClientDataForm: React.FC<ClientDataFormProps> = ({ initialData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    setValue,
  } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    defaultValues: initialData,
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [openChangePassword, setOpenChangePassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: {
    company: string;
    email: string;
    password: string;
  }) => {
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

          {openChangePassword && (
            <ChangePasswordPopup
              open={openChangePassword}
              onClose={() => setOpenChangePassword(false)}
            />
          )}
        </Box>
      </form>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenChangePassword(true)}
        >
          Сменить Пароль
        </Button>
      </Box>
    </Box>
  );
};

export default ClientDataForm;
