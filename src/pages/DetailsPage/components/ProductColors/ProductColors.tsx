import React, { type FC } from "react";
import cn from "classnames";
import classes from "./ProductColors.module.scss";

type TProps = {
  handleChangeColor: (color: string) => void;
  selectColor: string | undefined;
  colors: string[];
};

const ProductColors: FC<TProps> = ({
  handleChangeColor,
  selectColor,
  colors,
}) => (
  <div className={classes.list__wrapper}>
    <span>Select color:</span>
    <ul className={classes.list__container}>
      {colors.map((color) => (
        <li
          onClick={() => handleChangeColor(color)}
          className={cn(classes.list__container__item, {
            [classes.list__container__item__select]: color === selectColor,
          })}
          style={{
            backgroundColor: color,
            width: "2rem",
            height: "2rem",
            borderRadius: "100%",
          }}
        ></li>
      ))}
    </ul>
  </div>
);

export default ProductColors;
