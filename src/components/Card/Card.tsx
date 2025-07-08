import React, { type FC } from "react";

import classes from "./Card.module.scss";
import HeartIcon from "../images/HeartIcon";
import iphone_14_pro from "../../pages/HomePage/image/products/iphone_14_pro.png";

export type TCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
  handleAddToCart: (id: number) => void;
};

const Card: FC<TCardProps> = ({
  id,
  name,
  price,
  // image,
  // isFavorite,
  handleAddToCart,
}) => (
  <li>
    <div className={classes.card}>
      <div onClick={() => handleAddToCart(id)}>
        <HeartIcon />
      </div>
      <img src={iphone_14_pro} alt="iphone" />
      <div className={classes.card__info}>
        <span>{name}</span>
        <span>
          <b>${price}</b>
        </span>
      </div>
      <button>
        <span>Buy Now</span>
      </button>
    </div>
  </li>
);

export default Card;
