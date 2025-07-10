import React, { type FC } from "react";
import classes from "./Element.module.scss";

type TProps = {
  title: string;
  image: string;
  description: string;
};

const Element: FC<TProps> = ({ title, description, image }) => {
  return (
    <div className={classes.home__banners__item}>
      <img src={image} alt="ipad" />
      <div>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <button>Shop Now</button>
    </div>
  );
};

export default Element;
