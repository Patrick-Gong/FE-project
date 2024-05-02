import { useState } from 'react';

export default function CartItem({ item, onTransmute }) {

  return (
    <li className="cart-item" id={item.id}>
      <p>{`${item.name} - ${item.quantity} x $${item.price}`}</p>
      <div className="cart-item-actions">
        <button onClick={() => onTransmute(item, -1)}>-</button>
        {item.quantity}
        <button onClick={() => onTransmute(item, +1)}>+</button>
      </div>
    </li>
  );
}
