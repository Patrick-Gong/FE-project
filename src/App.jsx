import Header from './components/Header';
import MealItems from './components/MealItems';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { UserProgressContextProvider } from './store/UserProgressCtx';
import { CartContextProvider } from './store/CartCtx';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealItems />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
