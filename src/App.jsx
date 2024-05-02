import Header from './components/Header';
import MealItems from './components/MealItems';
import Cart from './components/Cart';
import Form from './components/Form';

import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartChecked, setIsCartChecked] = useState(false);

  function handleAddToCart(newMeal) {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => newMeal.id === cartItem.id
    );
    console.log(existingCartItemIndex);
    if (existingCartItemIndex >= 0) {
      cartItems[existingCartItemIndex].quantity++;
    } else {
      setCartItems((prevItems) => [...prevItems, newMeal]);
    }
  }

  function handleUpdateItemQuantity(targetItem, acc) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === targetItem.id) {
        const updatedQuantity = Math.max(cartItem.quantity + acc, 1); // Ensure quantity is at least 1
        return { ...cartItem, quantity: updatedQuantity };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  }

  function handleClickCart() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenForm() {
    setIsCartChecked(true);
  }

  return (
    <>
      <Modal open={isOpen}>
        {!isCartChecked ? (
          <Cart
            cartItems={cartItems}
            onClose={handleCloseModal}
            onOpen={handleOpenForm}
            onTransmute={handleUpdateItemQuantity}
          />
        ) : (
          <Form onClose={handleCloseModal} cartItems={cartItems} />
        )}
      </Modal>

      <Header cartItems={cartItems} onClick={handleClickCart} />
      <MealItems cartITems={cartItems} onAdd={handleAddToCart} />
    </>
  );
}

export default App;
