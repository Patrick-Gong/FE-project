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
    setCartItems((prevItems) => [...prevItems, newMeal]);
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
          />
        ) : (
          <Form onClose={handleCloseModal} cartItems={cartItems}/>
        )}
      </Modal>

      <Header cartItems={cartItems} onClick={handleClickCart} />
      <MealItems cartITems={cartItems} onAdd={handleAddToCart} />
    </>
  );
}

export default App;
