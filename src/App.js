import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Home from './Home';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
