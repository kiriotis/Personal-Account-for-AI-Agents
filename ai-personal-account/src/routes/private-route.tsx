import Cookies from 'js-cookie';
import { enqueueSnackbar } from 'notistack';
import { JSX, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export enum ROUTES {
  ROOT = '/',
  ADMIN = '/admin',
  AUTH = '/auth/',
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
}
export function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = Cookies.get('token');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === ROUTES.SIGN_IN &&
      token &&
      token !== 'undefined'
    ) {
      navigate(ROUTES.ROOT, { replace: true });
    }

    if (import.meta.env.VITE_DEVELOPMENT_MODE === 'true') {

      // пропуск авторизиции если включен режим разработки
      return;
    }

    if (!token || token === 'undefined') {
      enqueueSnackbar('Пользователь не авторизован', {
        variant: 'error',
      });
      navigate('/sign-in', { replace: true });
    }
  }, [location, token, navigate]);

  return children;
}
