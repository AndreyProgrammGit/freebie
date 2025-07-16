import { type FC } from "react";
import cn from "classnames";

import classes from "./Storage.module.scss";

type TProps = {
  handleChangeStorageSize: (size: string) => void;
  isSelect: string | undefined;
  storage: {
    storage: string;
    isAvailable: boolean;
  }[];
};

const Storage: FC<TProps> = ({
  handleChangeStorageSize,
  isSelect,
  storage,
}) => (
  <ul className={classes.list__container}>
    {storage.map((item) => (
      <li
        onClick={() => handleChangeStorageSize(item.storage)}
        key={item.storage}
        className={cn(classes.list__container__item, {
          [classes.list__container__item__avalible]: item.isAvailable,
          [classes.list__container__item__select]: item.storage === isSelect,
        })}
      >
        {item.storage}
      </li>
    ))}
  </ul>
);

export default Storage;
