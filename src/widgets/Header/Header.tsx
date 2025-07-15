import { useEffect, useState, type FC } from "react";

import classes from "./Header.module.scss";
import HeartIcon from "../../components/images/HeartIcon";
import CartIcon from "../../components/images/CartIcon";
import UserIcon from "../../components/images/UserIcon";
import LogoIcon from "../../components/images/LogoIcon";
import SearchIcon from "../../components/images/SearchIcon";
import { Link } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import {
  LOCALSTORAGE_NAME_CART,
  LOCALSTORAGE_NAME_FAVORITE,
} from "../../constant";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  // const { cart } = useAppSelector((state) => state.cart);
  const [cart, setCart] = useState<string[]>([]);
  const [favorite, setFavorite] = useState<string[]>([]);

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_NAME_CART)) {
      setCart(JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME_CART)!));
    }
    if (localStorage.getItem(LOCALSTORAGE_NAME_FAVORITE)) {
      setFavorite(
        JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME_FAVORITE)!)
      );
    }
  }, []);

  return (
    <div className={classes.header__wrapper}>
      <div className={classes.header__container}>
        <div className={classes.header__title}>
          <LogoIcon color="black" />
        </div>
        <div className={classes.header__search_panel}>
          <input
            type="text"
            className={classes.header__search_panel__input}
            placeholder="Search"
          />
          <div className={classes.header__search_panel__icon}>
            <SearchIcon />
          </div>
        </div>
        <div className={classes.header__nav}>
          <nav>
            <ul className={classes.header__nav__list}>
              <li className={classes.header__nav__list__item}>
                <Link to={""}>
                  <span className={classes.active}>Home</span>
                </Link>
              </li>
              <li className={classes.header__nav__list__item}>
                <Link to={""}>
                  <span>About</span>
                </Link>
              </li>
              <li className={classes.header__nav__list__item}>
                <span>Concact Us</span>
              </li>
              <li className={classes.header__nav__list__item}>
                <span>Blog</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.header__numbers}>
          <ul className={classes.header__numbers__list}>
            <li className={classes.header__numbers__list__item}>
              <span className={classes.header__numbers__list__item__favorite}>
                {favorite.length}
              </span>
              <HeartIcon />
            </li>
            <li className={classes.header__numbers__list__item}>
              <span className={classes.header__numbers__list__item__cart}>
                {cart.length}
              </span>
              <Link to={"/cart"}>
                <CartIcon />
              </Link>
            </li>
            <li className={classes.header__numbers__list__item}>
              <UserIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
