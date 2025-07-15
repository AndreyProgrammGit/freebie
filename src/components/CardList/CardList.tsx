import React, { type FC } from "react";
import type { TCardProps } from "../Card/Card";
import Card from "../Card/Card";

import classes from "./CardList.module.scss";
import type { Favorite } from "../../redux/slice/favorite";
type TProps = {
  favoriteIds: any;
  products: TCardProps[] | undefined;
  handleAddToFavorite: (data: Favorite) => void;
  handleRemoveFavorite: (id: number) => void;
};

const CardList: FC<TProps> = ({
  favoriteIds,
  products,
  handleAddToFavorite,
  handleRemoveFavorite,
}) => (
  <ul className={classes.home__products__block}>
    {products &&
      products.map((item: TCardProps) => (
        <Card
          key={item.id}
          {...item}
          favoriteIds={favoriteIds}
          handleAddToFavorite={handleAddToFavorite}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      ))}
  </ul>
);

export default CardList;
