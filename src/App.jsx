import Header from './components/Header';
import MealItems from './components/MealItems';
import Cart from './components/Cart';
import Form from './components/Form';
import CartContextProvider from './store/CartCtx';

import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartChecked, setIsCartChecked] = useState(false);

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
    <CartContextProvider>
      <Modal open={isOpen}>
        {!isCartChecked ? (
          <Cart
            onClose={handleCloseModal}
            onOpen={handleOpenForm}
          />
        ) : (
          <Form onClose={handleCloseModal} />
        )}
      </Modal>

      <Header onClick={handleClickCart} />
      <MealItems />
    </CartContextProvider>
  );
}

export default App;
