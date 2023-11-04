import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Success from './components/pages/Success';
import Cancel from './components/pages/Cancel';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
};

export default App;
