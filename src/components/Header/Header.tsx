import useResponsive from "../../hooks/useResponsive";
import "../Header/Header.scss";
import { Link, NavLink } from "react-router-dom";
import cartIcon from "../../assets/icons/cart-mobile.svg";
import catalogIcon from "../../assets/icons/cub-cart.svg";
function Header() {
  const { isMobile } = useResponsive();
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <span>Интерьер.</span>
      </Link>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/">
              {!isMobile ? "Каталог" : <img src={catalogIcon} />}
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="cart">
              {!isMobile ? "Корзина" : <img src={cartIcon} />}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
