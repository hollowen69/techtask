// src/components/molecules/LoginForm.js
import React from 'react';
import Button from '../atoms/Button';

const LoginForm = ({ onLogin }) => {
  const handleLoginClick = () => {
    // Perform login logic
    onLogin();
  };

  return (
    <div>
      {/* ...form fields */}
      <Button label="Login" onClick={handleLoginClick} className="mt-4" />
    </div>
  );
};

export default LoginForm;
