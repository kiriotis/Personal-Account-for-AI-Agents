import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
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

const ClientDataForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(passwordValidationSchema),
  });

  const [isEditingCompany, setIsEditingCompany] = React.useState(false);
  const [isEditingEmail, setIsEditingEmail] = React.useState(false);
  const [isEditingPassword, setIsEditingPassword] = React.useState(false);

  const handleEditClick = (field: string) => {
    switch (field) {
      case 'company':
        setIsEditingCompany(!isEditingCompany);
        break;
      case 'email':
        setIsEditingEmail(!isEditingEmail);
        break;
      case 'password':
        setIsEditingPassword(!isEditingPassword);
        break;
      default:
        break;
    }
  };

  const onSubmit = (data: {
    company: string;
    email: string;
    password: string;
  }) => {
    if (!isEditingCompany && !isEditingEmail && !isEditingPassword) return;
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Company"
              variant={isEditingCompany ? 'outlined' : 'filled'}
              error={!!errors.company}
              disabled={!isEditingCompany}
              helperText={errors.company ? errors.company.message : ''}
              fullWidth
              margin="normal"
            />
          )}
        />
        <IconButton
          onClick={() => handleEditClick('company')}
          color={isEditingCompany ? 'secondary' : 'primary'}
        >
          {isEditingCompany ? <DoneIcon /> : <EditIcon />}
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant={isEditingCompany ? 'outlined' : 'filled'}
              error={!!errors.email}
              disabled={!isEditingEmail}
              helperText={errors.email ? errors.email.message : ''}
              fullWidth
              margin="normal"
            />
          )}
        />
        <IconButton
          onClick={() => handleEditClick('email')}
          color={isEditingEmail ? 'secondary' : 'primary'}
        >
          {isEditingEmail ? <DoneIcon /> : <EditIcon />}
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              variant={isEditingCompany ? 'outlined' : 'filled'}
              error={!!errors.password}
              disabled={!isEditingPassword}
              helperText={errors.password ? errors.password.message : ''}
              fullWidth
              margin="normal"
            />
          )}
        />
        <IconButton
          onClick={() => handleEditClick('password')}
          color={isEditingPassword ? 'secondary' : 'primary'}
        >
          {isEditingPassword ? <DoneIcon /> : <EditIcon />}
        </IconButton>
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ClientDataForm;
