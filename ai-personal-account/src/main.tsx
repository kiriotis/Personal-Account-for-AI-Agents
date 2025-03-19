import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import './Main.css';
import './i18n';
import routes from './app/routes';
import { theme } from './utils/theme/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>
);
