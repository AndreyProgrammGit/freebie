import React, { type FC } from "react";
import classes from "./Elements.module.scss";

type TProps = {
  content: string[];
  title: string;
};

const Elements: FC<TProps> = ({ content, title }) => {
  return (
    <>
      <h2 className={classes.title}>{title}</h2>
      <ul className={classes.list}>
        {content &&
          content.map((item) => (
            <li key={item} className={classes.list__item}>
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Elements;
