// src/components/molecules/LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../../firebase';
import { useEffect } from 'react';

import Header from '../../molecules/Header';
const Cart = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is not logged in
        
        navigate('/Login');
        
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);
   
  return (
    <div>
        <Header />
        <h3>Cart</h3>
    </div>
  );
};

export default Cart;
