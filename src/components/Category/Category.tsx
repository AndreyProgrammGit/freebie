import React, { type FC } from "react";

import classes from "./Category.module.scss";
import left from "./images/arrow/left.png";
import right from "./images/arrow/right.png";
import { Element } from "./Element/Element";

type TProps = {
  categories:
    | {
        id: number;
        image: string;
        name: string;
      }[]
    | undefined;
};

export const Category: FC<TProps> = ({ categories }) => (
  <div className={classes.home__category}>
    <div className={classes.home__category__title}>
      <h2>Browse By Category</h2>
      <div className={classes.home__category__title__buttons}>
        <img src={left} alt="<" />
        <img src={right} alt=">" />
      </div>
    </div>
    <ul className={classes.home__category__slider}>
      {categories &&
        categories.map((item) => <Element key={item.id} {...item} />)}
    </ul>
  </div>
);
