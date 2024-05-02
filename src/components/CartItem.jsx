import { useContext, useState } from 'react';
import { CartContext } from '../store/CartCtx';

export default function CartItem({item}) {

  const {updateQuantity} = useContext(CartContext);

  return (
    <li className="cart-item" id={item.id}>
      <p>{`${item.name} - ${item.quantity} x $${item.price}`}</p>
      <div className="cart-item-actions">
        <button onClick={() => updateQuantity(item, -1)}>-</button>
        {item.quantity}
        <button onClick={() => updateQuantity(item, +1)}>+</button>
      </div>
    </li>
  );
}
