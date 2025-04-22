import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {
  useGetUserQuery,
  usePatchUserMutation,
} from '../../services/user.service';

const passwordValidationSchema = Yup.object().shape({
  company: Yup.string().required('Company is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function ClientDataForm() {
  const { data: userData } = useGetUserQuery();
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    defaultValues: {
      company: '',
      email: '',
    },
    values: {
      company: userData?.company_name || '',
      email: userData?.email || '',
    },
  });

  const [updateUser] = usePatchUserMutation();

  const onSubmit = (data: { company: string; email: string }) => {
    updateUser({
      userData: { company_name: data.company },
    });
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
}

export default ClientDataForm;
