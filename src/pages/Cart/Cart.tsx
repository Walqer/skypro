import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import "../Cart/Cart.scss";
import CartItem from "./components/CartItem/CartItem";
import Form from "./components/Form/Form";
import { CartSlice } from "../../store/reducers/cartSlice";

function Cart() {
  const { cart } = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const { clear } = CartSlice.actions;
  const handleClear = () => {
    dispatch(clear());
  };
  return cart.length ? (
    <main className="cart-page">
      <div className="cart-page__content">
        <header className="cart-page__header">
          <span>Товар</span>
          <span>К-во</span>
        </header>
        <ul className="cart-items">
          {cart.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </ul>
        <div className="btn-wrap">
          <Button onClick={handleClear}>Очистить корзину</Button>
          <Link to="/">
            <Button black>Продолжить покупки</Button>
          </Link>
        </div>
      </div>
      <div className="cart-page__form">
        <Form />
      </div>
    </main>
  ) : (
    <main className="cart-page empty">
      <h1>В корзине нет товаров</h1>
    </main>
  );
}
export default Cart;
