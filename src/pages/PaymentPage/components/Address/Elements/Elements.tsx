import React, { type FC } from "react";

import classes from "./Elements.module.scss";
import Constructor from "../../Constructor/Constructor";

interface TProps {
  title: string;
  address: string;
  phoneNumber: string;
  handleRemove: (title: string) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
    address: string
  ) => void;
  isChooseAddress: string;
}

const Elements: FC<TProps> = ({
  title,
  address,
  phoneNumber,
  handleRemove,
  handleInputChange,
  isChooseAddress,
}) => (
  <div className={classes.elements}>
    <div className={classes.elements__wrapper}>
      <input
        type="radio"
        name="address"
        id="address"
        checked={isChooseAddress === address}
        onChange={(e) => handleInputChange(e, title, address)}
      />
      <div className={classes.elements__wrapper__content}>
        {!title ? (
          <Constructor />
        ) : (
          <>
            <h3>{title}</h3>
            <div>
              <span className={classes.elements__wrapper__content__address}>
                {address}
              </span>
              <span className={classes.elements__cwrapper__ontent__number}>
                {phoneNumber}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
    <span onClick={() => handleRemove(title)}>X</span>
  </div>
);

export default Elements;
