import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Cart from './components/pages/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
