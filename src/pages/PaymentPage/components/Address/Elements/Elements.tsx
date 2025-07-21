import React, { type FC } from "react";

import classes from "./Elemetsx.module.scss";

interface TProps {
  title: string;
  address: string;
  phoneNumber: string;
  handleRemove: (title: string) => void;
}

const Elements: FC<TProps> = ({
  title,
  address,
  phoneNumber,
  handleRemove,
}) => (
  <div className={classes.elements}>
    <div className={classes.elements__wrapper}>
      <input type="radio" name="address" id="address" />
      <div className={classes.elements__wrapper__content}>
        <h3>{title}</h3>
        <div>
          <span className={classes.elements__wrapper__content__address}>
            {address}
          </span>
          <span className={classes.elements__cwrapper__ontent__number}>
            {phoneNumber}
          </span>
        </div>
      </div>
    </div>
    <span onClick={() => handleRemove(title)}>X</span>
  </div>
);

export default Elements;
