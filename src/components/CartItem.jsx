import { useState } from 'react';

export default function CartItem({ item, onSum }) {
  const [amount, setAmount] = useState(1);

  function handleMinusAmount() {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
      onSum(-item.price);
    }
  }

  function handlePlusAmount() {
    setAmount((prev) => prev + 1);
    onSum(+item.price);
  }

  return (
    <li className="cart-item" id={item.id}>
      <p>{`${item.name} - ${amount} x $${item.price}`}</p>
      <div className="cart-item-actions">
        <button onClick={handleMinusAmount}>-</button>
        {amount}
        <button onClick={handlePlusAmount}>+</button>
      </div>
    </li>
  );
}
