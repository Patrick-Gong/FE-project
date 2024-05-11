import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartCtx';
import UserProgressContext from '../store/UserProgressCtx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
