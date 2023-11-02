// src/components/molecules/CartItem.js
import React from 'react';
import Button from '../../atoms/Button';
const CartItem = ({ product, onRemoveClick }) => {
  const { imageSrc, text } = product;
/* 
<button className="cart-item-button" onClick={() => onRemoveClick(product)}>
          Remove
        </button>

*/
  return (
    <div className="cart-item">
      <img src={imageSrc} alt={text} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-text">{text}</p>
        
        <Button label="Remove" onClick={onRemoveClick} />
      </div>
    </div>
  );
};

export default CartItem;
