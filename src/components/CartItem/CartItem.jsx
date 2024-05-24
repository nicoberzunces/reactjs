import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


const CartItem = ({ id, name, img, price, quantity }) => {
    const { updateQuantity, removeItem } = useContext(CartContext);
  
    const handleIncrease = () => {
      updateQuantity(id, quantity + 1);
    };
  
    const handleDecrease = () => {
      if (quantity > 1) {
        updateQuantity(id, quantity - 1);
      }
    };
  
    const handleRemove = () => {
      removeItem(id);
    };
  
    return (
      <div className="CartItem">
        <img src={img} alt={name} style={{ width: '200px', height: 'auto' }} />
        <div>
          <p>{name}</p>
          <p>Precio: ${price}</p>
          <p>Cantidad: {quantity}</p>
          <button onClick={handleRemove}>Eliminar</button>
        </div>
      </div>
    );
  };

export default CartItem;