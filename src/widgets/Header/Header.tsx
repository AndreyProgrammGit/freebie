import { type FC } from "react";

import classes from "./Header.module.scss";
import HeartIcon from "../../components/images/HeartIcon";
import CartIcon from "../../components/images/CartIcon";
import UserIcon from "../../components/images/UserIcon";
import LogoIcon from "../../components/images/LogoIcon";
import SearchIcon from "../../components/images/SearchIcon";
import { Link } from "react-router";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={classes.header__wrapper}>
      <div className={classes.header__container}>
        <div className={classes.header__title}>
          <LogoIcon />
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
            <li className={classes.heaver__numbers__list__item}>
              <HeartIcon />
            </li>
            <li className={classes.heaver__numbers__list__item}>
              <CartIcon />
            </li>
            <li className={classes.heaver__numbers__list__item}>
              <UserIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
