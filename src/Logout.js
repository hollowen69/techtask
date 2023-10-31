import React from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      // Handle successful logout (e.g., redirect to login)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    
      <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
