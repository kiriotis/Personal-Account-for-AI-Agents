import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Billing from './pages/Billing/Billing';
import SignIn from './pages/Login/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Stats from './pages/Stats/Stats';
import TextBots from './pages/TextBots/TextBots';
import Usage from './pages/Usage/Usage';
import VoiceBots from './pages/VoiceBots/VoiceBots';
import { PrivateRoute } from './routes/private-route';
import { store } from './store/store';
import './Main.css';
import './i18n';
import routes from './app/routes';
// import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    />
    <Provider store={store}>
    <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
