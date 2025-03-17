import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Billing from '../pages/Billing/Billing';
import SignIn from '../pages/Login/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import TextBots from '../pages/TextBots/TextBots';
import Usage from '../pages/Usage/Usage';
import VoiceBots from '../pages/VoiceBots/VoiceBots';
import { PrivateRoute } from '../routes/private-route';
import Company from '../pages/Company/Company';

export enum RoutePaths {
  Home = '/',
  TextBots = '/text-bots',
  VoiceBots = '/voice-bots',
  Stats = '/stats',
  Billing = '/billing',
  Usage = '/usage',
  Company = '/company',
  SignIn = '/sign-in',
  NotFound = '*',
}

export const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <TextBots />
          </PrivateRoute>
        ),
      },
      {
        path: RoutePaths.TextBots,
        element: (
          <PrivateRoute>
            <TextBots />
          </PrivateRoute>
        ),
      },
      {
        path: RoutePaths.VoiceBots,
        element: (
          <PrivateRoute>
            <VoiceBots />
          </PrivateRoute>
        ),
      },
      {
        path: RoutePaths.Usage,
        element: (
          <PrivateRoute>
            <Usage />
          </PrivateRoute>
        ),
      },
      {
        path: RoutePaths.Company,
        element: (
          <PrivateRoute>
            <Company />
          </PrivateRoute>
        ),
      },
      {
        path: RoutePaths.Billing,
        element: (
          <PrivateRoute>
            <Billing />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: RoutePaths.SignIn,
    element: <SignIn />,
  },
  {
    path: RoutePaths.NotFound,
    element: <NotFound />,
  },
]);

export default router;
