import React, { type FC } from "react";
import phone from "../../../../../../HomePage/images/products/iphone_14_pro.png";

import classes from "./Elements.module.scss";

interface TProps {
  image: string;
  name: string;
  price: number;
}

const Elements: FC<TProps> = ({ image, name, price }) => {
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <img src={phone} alt="" width={40} height={40} />
        <span>{name}</span>
      </div>
      <span className={classes.product__price}>
        <b>${price}</b>
      </span>
    </div>
  );
};

export default Elements;
