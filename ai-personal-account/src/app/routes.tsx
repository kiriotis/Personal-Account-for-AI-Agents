import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { PrivateRoute } from '../routes/private-route';

const Billing = lazy(() => import('../pages/Billing/Billing'));
const SignIn = lazy(() => import('../pages/Login/SignIn'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const TextBots = lazy(() => import('../pages/TextBots/TextBots'));
const Usage = lazy(() => import('../pages/Usage/Usage'));
const VoiceBots = lazy(() => import('../pages/VoiceBots/VoiceBots'));
const Company = lazy(() => import('../pages/Company/Company'));

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
          <Suspense fallback={<div>Загрузка...</div>}>
            <PrivateRoute>
              <TextBots />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: RoutePaths.TextBots,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <PrivateRoute>
              <TextBots />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: RoutePaths.VoiceBots,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <PrivateRoute>
              <VoiceBots />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: RoutePaths.Usage,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <PrivateRoute>
              <Usage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: RoutePaths.Company,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <PrivateRoute>
              <Company />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: RoutePaths.Billing,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <PrivateRoute>
              <Billing />
            </PrivateRoute>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: RoutePaths.SignIn,
    element: (
      <Suspense fallback={<div>Загрузка...</div>}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: RoutePaths.NotFound,
    element: (
      <Suspense fallback={<div>Загрузка...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
