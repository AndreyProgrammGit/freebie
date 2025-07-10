import React, { type FC } from "react";
import Element from "./Element/Element";
import classes from "./Banner.module.scss";
type TProps = {
  items:
    | {
        id: number;
        title: string;
        image: string;
        description: string;
      }[]
    | undefined;
};

export const Banner: FC<TProps> = ({ items }) => {
  console.log(items);
  return (
    <div className={classes.home__banners}>
      {items && items.map((item) => <Element key={item.id} {...item} />)}
    </div>
  );
};
