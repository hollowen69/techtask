import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleLoginButtonClick = () => {
        // Navigate to a different route on button click
        navigate('/Login');
      };
      const handleRegisterButtonClick = () => {
        // Navigate to a different route on button click
        navigate('/Register');
      };
      const handleCartButtonClick = () => {
        // Navigate to a different route on button click
        navigate('/Cart');
      };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLoginButtonClick}> Login</button>
      <button onClick={handleRegisterButtonClick}> Register</button>
      <button onClick={handleCartButtonClick}> Cart</button>

    </div>
  );
};

export default Home;
