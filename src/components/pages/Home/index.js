// src/components/molecules/LoginForm.js
import React from 'react';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputField from '../../atoms/InputField';
import { auth } from '../../../firebase';
import Header from '../../molecules/Header';
const Home = () => {
  

  return (

    <div>
        <Header />
      Home
    </div>
  );
};

export default Home;
