import { useState, useEffect } from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onClose, onOpen }) {
  let sum = 0;
  for (let item in cartItems) {
    sum = sum + Number(cartItems[item].price);
  }
  const initialValue = sum;
  console.log(initialValue);

  const [totalPrice, setTotalPrice] = useState(initialValue);

  useEffect(() => {
    setTotalPrice(initialValue);
  }, [cartItems, initialValue]);

  console.log(totalPrice);

  function handleUpdateTotalPrice(totalPriceChange) {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + totalPriceChange);
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} onSum={handleUpdateTotalPrice} />
        ))}
      </ul>
      <p className="cart-total">$ {totalPrice}</p>
      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={onOpen}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
