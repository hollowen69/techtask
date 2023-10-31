import React from 'react';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import InputField from '../../atoms/InputField';
import { auth } from '../../../firebase';
import Header from '../../molecules/Header';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      // Handle successful registration (e.g., redirect to login)
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
        <Header />
      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
        <InputField  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button label="SignUp" onClick={handleSignUp}/>
      </form>
    </div>
  );
};

export default SignUp;
