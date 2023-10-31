// src/components/atoms/Input.js
import React from 'react';

const Input = ({ type, placeholder, value, onChange, className, disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 p-2 rounded ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
