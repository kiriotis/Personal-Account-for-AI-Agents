import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import { enqueueSnackbar } from 'notistack';
import { getNavigate } from './navigation';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryHandler = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    getNavigate()('/sign-in');
    Cookies.remove('token');
    enqueueSnackbar(t('snackbar.authError.notAuthorized'), {
      variant: 'error',
    });
  }
  if (result?.error?.status === 400) {
    enqueueSnackbar(t('snackbar.authError.invalidCredentials'), {
      variant: 'error',
    });
  }
  if (result?.error?.status === 500) {
    enqueueSnackbar(t('snackbar.authError.500'), {
      variant: 'error',
    });
    throw result.error;
  }
  if (result?.error?.status === 'FETCH_ERROR') {
    enqueueSnackbar(t('snackbar.authError.fetchError'), {
      variant: 'error',
    });
    throw result.error;
  }
  return result;
};

export default baseQueryHandler;
