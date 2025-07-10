import React, { type FC } from "react";

import classes from "./List.module.scss";
import Elements from "./Elements/Elements";

type TProps = {
  content: string[];
  title: string;
};

const List: FC<TProps> = ({ content, title }) => {
  return (
    <div className={classes.footer__container__list}>
      <Elements title={title} content={content} />
    </div>
  );
};

export default List;
