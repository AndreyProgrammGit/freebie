import React, { type FC } from "react";

import classes from "./Card.module.scss";
import HeartIcon from "../images/HeartIcon";
import iphone_14_pro from "../../pages/HomePage/images/products/iphone_14_pro.png";
import { Link } from "react-router";

export type TCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  variant: string;
  isFavorite: boolean;
  handleAddToCart: (id: number) => void;
};

const Card: FC<TCardProps> = ({
  id,
  name,
  price,
  // image,
  // isFavorite,
  variant,
  handleAddToCart,
}) => (
  <li>
    <div className={classes.card}>
      <div onClick={() => handleAddToCart(id)}>
        <HeartIcon />
      </div>
      <img src={iphone_14_pro} alt="iphone" />
      <div className={classes.card__info}>
        <span>
          {name} <br /> <b>{variant}</b>
        </span>
        <span>
          <b>${price}</b>
        </span>
      </div>
      <Link to={`/${id}`}>
        <button>
          <span>Buy Now</span>
        </button>
      </Link>
    </div>
  </li>
);

export default Card;
