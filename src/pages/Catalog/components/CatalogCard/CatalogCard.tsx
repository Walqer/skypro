import { CatalogItem } from "../../../../store/store-data";
import "../CatalogCard/CatalogCard.scss";
import cart from "../../../../assets/icons/shop.svg";
import like from "../../../../assets/icons/heart.svg";
import { useAppDispatch } from "../../../../hooks/redux";
import { CartSlice } from "../../../../store/reducers/cartSlice";

const CatalogCard: React.FC<CatalogItem> = (props) => {
  const { description, img, price, title } = props;
  let priceStyle = price.toString();
  priceStyle = priceStyle.replace(
    /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
    "$1" + " "
  );
  const dispatch = useAppDispatch();
  const { add } = CartSlice.actions;
  const handleCartClick = () => {
    dispatch(add({ ...props, count: 1 }));
  };
  return (
    <li className="catalog__card">
      <div className="img-wrapper">
        <img src={img} alt={title} />
        <div className="overlay"></div>
      </div>
      <span className="catalog__card-title">{title}</span>
      <p className="catalog__card-description">{description}</p>
      <p className="catalog__card-price">{priceStyle} руб.</p>
      <div className="catalog__card-buttons">
        <button onClick={handleCartClick} className="catalog__card-button">
          <img src={cart} alt="icon" />
        </button>
        <button className="catalog__card-button">
          <img src={like} alt="icon" />
        </button>
      </div>
    </li>
  );
};
export default CatalogCard;
