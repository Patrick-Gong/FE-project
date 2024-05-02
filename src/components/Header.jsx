import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import { CartContext } from '../store/CartCtx';

export default function Header({ onClick }) {
  const { cartItems } = useContext(CartContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button" onClick={onClick}>
        cart ({cartItems.length})
      </button>
    </header>
  );
}
