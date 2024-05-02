import CartItem from './CartItem';

function Cart({ cartItems, onClose, onOpen, onTransmute }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} onTransmute={onTransmute}/>
        ))}
      </ul>
      <p className="cart-total">{formattedTotalPrice}</p>
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
