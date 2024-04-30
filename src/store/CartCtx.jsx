import { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  handleAddToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const cartItems = [...state.items];

    
  }
}


const [cartItems, setCartItems] = useState([]);

function handleAddToCart(newMeal) {
  setCartItems((prevItems) => [...prevItems, newMeal]);
}

export default function CartContextProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(newMeal) {
    setCartItems((prevItems) => [...prevItems, newMeal]);
  }

  const ctxValue = {items}

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  )
}
