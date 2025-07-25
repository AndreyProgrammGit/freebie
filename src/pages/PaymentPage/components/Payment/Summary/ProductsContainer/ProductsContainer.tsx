import { type FC } from "react";
import Elements from "./Elements/Elements";

import classes from "./ProductsContainer.module.scss";

interface TProps {
  cart: {
    image: string;
    name: string;
    price: number;
  }[];
}

const ProductsContainer: FC<TProps> = ({ cart }) => {
  return (
    <div className={classes.wrapper}>
      {cart.map((item) => (
        <Elements {...item} />
      ))}
    </div>
  );
};

export default ProductsContainer;
