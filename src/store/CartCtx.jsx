import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
});

// function shoppingCartReducer(state, action) {
//   if (action.type === 'ADD_ITEM') {
//     const cartItems = [...state.items];
//   }
// }

// function handleAddToCart(newMeal) {
//   setCartItems((prevItems) => [...prevItems, newMeal]);
// }

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

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

  const ctxValue = {
    cartItems,
    addToCart: handleAddToCart,
    updateQuantity: handleUpdateItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
