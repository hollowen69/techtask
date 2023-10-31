import React from 'react';
import { auth } from './firebase';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Handle successful logout (e.g., redirect to login)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
