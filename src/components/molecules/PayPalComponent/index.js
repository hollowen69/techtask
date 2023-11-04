import React from 'react';
import Button from '../../atoms/Button';

const PaypalComponent = ({ id,imageSrc, title,price, buttonText, onButtonClick, className }) => {
  const handleButtonClick = () => {
    onButtonClick(price); // Pass the card ID to the parent component function
  };
  return (
    <div id={id} className={`card ${className}`}>
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p>{price} $</p>
        <Button label="buy now" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default PaypalComponent;