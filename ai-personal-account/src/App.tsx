import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './i18n';
import Billing from './pages/Billing/Billing';
import SignIn from './pages/Login/SignIn';
import Stats from './pages/Stats/Stats';
import TextBots from './pages/TextBots/TextBots';
import User from './pages/User/User';
import VoiceBots from './pages/VoiceBots/VoiceBots';
import { PrivateRoute } from './routes/private-route';
import { store } from './store/store';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <TextBots></TextBots>
                </PrivateRoute>
              }
            />

            <Route
              path="/TextBots"
              element={
                <PrivateRoute>
                  <TextBots></TextBots>
                </PrivateRoute>
              }
            />
            <Route
              path="/VoiceBots"
              element={
                <PrivateRoute>
                  <VoiceBots></VoiceBots>
                </PrivateRoute>
              }
            />
            <Route
              path="/Stats"
              element={
                <PrivateRoute>
                  <Stats></Stats>
                </PrivateRoute>
              }
            />
            <Route
              path="/Billing"
              element={
                <PrivateRoute>
                  <Billing></Billing>
                </PrivateRoute>
              }
            />
            <Route
              path="/User"
              element={
                <PrivateRoute>
                  <User></User>
                </PrivateRoute>
              }
            />

            <Route path="/sign-in" element={<SignIn></SignIn>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
