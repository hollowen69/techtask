import React from 'react';
import Button from '../../atoms/Button';

const Card = ({ id,imageSrc, title,price, buttonText, onButtonClick, className }) => {
  const handleButtonClick = () => {
    onButtonClick(id); // Pass the card ID to the parent component function
  };
  return (
    <div id={id} className={`card ${className}`}>
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p>{price} $</p>
        <Button label={buttonText} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Card;