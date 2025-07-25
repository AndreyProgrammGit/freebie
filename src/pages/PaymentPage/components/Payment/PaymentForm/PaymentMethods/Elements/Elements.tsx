import React, { type FC } from "react";
import classNames from "classnames";

import classes from "./Elements.module.scss";

interface TProps {
  method: string;
  selectedMethod: string;
  handleChangeMethod: (method: string) => void;
}

const Elements: FC<TProps> = ({
  method,
  selectedMethod,
  handleChangeMethod,
}) => {
  const methodClass = classNames(classes.wrapper__method, {
    [classes.active]: method === selectedMethod,
  });

  return (
    <div className={classes.wrapper} onClick={() => handleChangeMethod(method)}>
      <span className={methodClass}>{method}</span>
    </div>
  );
};

export default Elements;
