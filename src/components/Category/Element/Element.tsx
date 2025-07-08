import React, { type FC } from "react";
import phone from "../images/phone_ic.png";
import classes from "./Element.module.scss";

type TProps = {
  image: string;
  name: string;
};

export const Element: FC<TProps> = ({ image, name }) => {
  return (
    <li className={classes.home__category__slider__elements}>
      <img src={image === "/" ? phone : image} alt="#" />
      <span>{name}</span>
    </li>
  );
};
