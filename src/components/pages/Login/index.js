// src/components/molecules/LoginForm.js
import React from 'react';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputField from '../../atoms/InputField';
import { auth } from '../../../firebase';
import Header from '../../molecules/Header';



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email, password);
      // Handle successful login (e.g., redirect to dashboard)
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Header />
      <h2>Login</h2>
      <InputField  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button label="Login" onClick={handleLoginClick}/>
    </div>
  );
};

export default Login;
