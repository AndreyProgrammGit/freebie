import React from "react";

import classes from "./ButtonGroup.module.scss";

export const ButtonGroup = ({
  buttonTextFirst,
  buttonTextSecond,
  buttonFirstClick,
  buttonSecondClick,
}: {
  buttonTextFirst: string;
  buttonTextSecond: string;
  buttonFirstClick: () => void;
  buttonSecondClick: () => void;
}) => {
  return (
    <div className={classes.buttonContainer}>
      <button
        onClick={() => buttonFirstClick()}
        className={classes.buttonFirst}
      >
        {buttonTextFirst}
      </button>
      <button
        onClick={() => buttonSecondClick()}
        className={classes.ButtonSecond}
      >
        {buttonTextSecond}
      </button>
    </div>
  );
};
