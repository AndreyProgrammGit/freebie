import React, { type FC } from "react";
import img from "../../HomePage/images/products/iphone_14_pro.png";

import classes from "./Elements.module.scss";

type TProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  handleRemoveProduct: (id: number) => void;
  handleAddCart: (id: number) => void;
  handleRemoveCart: (id: number) => void;
};

const minus_ic = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12L8 12"
      stroke="black"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);

const plus_ic = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8L12 16"
      stroke="black"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M16 12L8 12"
      stroke="black"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);

const remove_ic = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Elements: FC<TProps> = ({
  id,
  name,
  price,
  image,
  handleRemoveProduct,
  handleAddCart,
  handleRemoveCart,
  quantity,
}) => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.container}>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className={classes.container__actions}>
          <span
            onClick={() => handleRemoveCart(id)}
            className={classes.container__actions__removeOne}
          >
            {minus_ic()}
          </span>
          <span className={classes.container__actions__quantity}>
            {quantity}
          </span>
          <span
            onClick={() => handleAddCart(id)}
            className={classes.container__actions__addOne}
          >
            {plus_ic()}
          </span>
          <span className={classes.container__actions__price}>${price}</span>
          <span
            onClick={() => handleRemoveProduct(id)}
            className={classes.container__actions__remove}
          >
            {remove_ic()}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Elements;
