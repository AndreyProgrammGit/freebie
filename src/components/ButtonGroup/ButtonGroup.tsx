import React from "react";

import classes from "./ButtonGroup.module.scss";

export const ButtonGroup = ({
  buttonTextFirst,
  buttonTextSecond,
  buttonSecondClick,
}: {
  buttonTextFirst: string;
  buttonTextSecond: string;
  buttonSecondClick: () => void;
}) => {
  return (
    <div className={classes.buttonContainer}>
      <button className={classes.buttonFirst}>{buttonTextFirst}</button>
      <button
        onClick={() => buttonSecondClick()}
        className={classes.ButtonSecond}
      >
        {buttonTextSecond}
      </button>
    </div>
  );
};
