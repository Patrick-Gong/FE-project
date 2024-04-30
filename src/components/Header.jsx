import logoImg from '../assets/logo.jpg';

export default function Header({ cartItems, onClick }) {
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
