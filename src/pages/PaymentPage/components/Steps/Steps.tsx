import React, { type FC, type JSX } from "react";

import classes from "./Steps.module.scss";

interface TProps {
  step: number;
  title: string;
  img: JSX.Element;
  id: number;
  index: number;
}

const Steps: FC<TProps> = ({ step, title, img, id, index }) => (
  <div
    className={classes.step__wrapper}
    style={{ opacity: id === index ? 1 : 0.5 }}
  >
    {img}
    <div className={classes.step__items}>
      <span>Step {step}</span>
      <span>{title}</span>
    </div>
  </div>
);

export default Steps;
