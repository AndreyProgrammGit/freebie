import React, { type FC } from "react";
import type { TCardProps } from "../Card/Card";
import Card from "../Card/Card";

import classes from "./CardList.module.scss";

type TProps = {
  products: TCardProps[] | undefined;
  handleAddToCart: (id: number) => void;
};

const CardList: FC<TProps> = ({ products, handleAddToCart }) => (
  <ul className={classes.home__products__block}>
    {products &&
      products.map((item: TCardProps) => (
        <Card key={item.id} {...item} handleAddToCart={handleAddToCart} />
      ))}
  </ul>
);

export default CardList;
