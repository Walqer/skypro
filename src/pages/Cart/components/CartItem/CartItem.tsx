import "../CartItem/CartItem.scss";
import { ICartItem } from "../../../../store/reducers/cartSlice";
import Counter from "../Counter/Counter";
import { useAppDispatch } from "../../../../hooks/redux";
import { CartSlice } from "../../../../store/reducers/cartSlice";

const CartItem = ({ count, description, img, price, title, id }: ICartItem) => {
  const dispatch = useAppDispatch();
  const { remove } = CartSlice.actions;
  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };
  return (
    <li className="cart-item">
      <img className="cart-item__img" src={img} alt={title} />
      <div className="cart-item__content">
        <h3 className="cart-item__title">{title}</h3>
        <p className="cart-item__description">{description}</p>
        <span className="cart-item__price">{price}</span>
        <div className="cart-item__buttons">
          <button className="cart-item__button">Избранные</button>
          <button
            onClick={() => handleRemove(id)}
            className="cart-item__button"
          >
            Удалить
          </button>
        </div>
      </div>
      <Counter min={count} max={10} id={id} count={count} />
    </li>
  );
};
export default CartItem;
