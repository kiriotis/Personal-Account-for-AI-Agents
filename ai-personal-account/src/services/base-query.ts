import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';
import { enqueueSnackbar } from 'notistack';

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
    window.location.href = '/sign-in';
    Cookies.remove('token');
    enqueueSnackbar('Пользователь не авторизован', {
      variant: 'error',
    });
  }
  if (result?.error?.status === 500) {
    enqueueSnackbar('Что - то пошло не так. Возможно, сервер недоступен', {
      variant: 'error',
    });
    throw result.error;
  }
  if (result?.error?.status === 'FETCH_ERROR') {
    enqueueSnackbar('Ошибка загрузки данных', {
      variant: 'error',
    });
    throw result.error;
  }
  return result;
};

export default baseQueryHandler;
