import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './i18n';
import Login from './pages/Login';
import Main from './pages/Main/Main';
import { PrivateRoute } from './routes/private-route';
import { store } from './store/store';

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
            <Route path="/" element={<Main></Main>} />

            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <>Kek2</>
                </PrivateRoute>
              }
            />
            <Route path="/contact" element={<>kek3</>} />
            <Route path="/login" element={<Login></Login>} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
