import { Button, Container, Typography } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
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
            <Route
              path="/"
              element={
                <>
                  <Container>
                    <Typography variant="h3" component="h1" gutterBottom>
                      Hello, MUI!
                    </Typography>
                    <Button variant="contained" color="primary">
                      Click Me
                    </Button>
                  </Container>
                </>
              }
            />
            <Route path="/about" element={<>kek2</>} />
            <Route path="/contact" element={<>kek3</>} />
            <Route path="/login" element={<Login></Login>} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
