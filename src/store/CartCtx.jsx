import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      // state.items에서 특정 인덱스의 객체를 선택
      const existingCartItem = state.items[existingCartItemIndex];
      // 그 객체의 quantity 특성만 +1로 변경
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      // 원래 객체를 바뀐 객체로 바꿈
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    // 리액트가 action의 결과로 설정할 다음 state값
    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      // ADD_ITEM과는 다르게 dispatch함수가
      // action 객체에 id를 받아오기 때문에
      // action.item.id -> action.id로 바꿈
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItem] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }
  // 조건문에 걸리지 않은 조건들에서는 아래의 값을 반환
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const ctxValue = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
