import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';

import './App.css';

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
