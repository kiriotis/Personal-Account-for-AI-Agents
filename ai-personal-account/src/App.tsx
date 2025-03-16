import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './i18n';
import Main from './pages/Main/Main';
import { PrivateRoute } from './routes/private-route';
import { store } from './store/store';
import SignIn from './pages/Login/SignIn';

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
                  <Main></Main>
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <>Kek2</>
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <>kek3</>
                </PrivateRoute>
              }
            />
            <Route path="/sign-in" element={<SignIn></SignIn>} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
