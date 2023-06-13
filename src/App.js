import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProprietariosPage from './pages/ProprietariosPage'; // Import the ProprietariosPage component
import CarroPage from './pages/CarroPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/carros" element={<CarroPage />} />
        <Route path="/proprietarios" element={<ProprietariosPage />} /> // Define the route for ProprietariosPage
        <Route path="/login/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App; 
/**
 * App.js
 */

