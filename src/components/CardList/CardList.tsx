import React, { useEffect, useState, type FC } from "react";
import type { TCardProps } from "../Card/Card";
import Card from "../Card/Card";

import classes from "./CardList.module.scss";
import type { Favorite } from "../../redux/slice/favorite";

type TProps = {
  filters?: Record<string, boolean> | null;
  favoriteIds: any;
  products: TCardProps[] | undefined;
  handleAddToFavorite: (data: Favorite) => void;
  handleRemoveFavorite: (id: number) => void;
};

const CardList: FC<TProps> = ({
  filters,
  favoriteIds,
  products,
  handleAddToFavorite,
  handleRemoveFavorite,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  useEffect(() => {
    if (filters) {
      const activeBrands = Object.entries(filters.brand)
        .filter(([, isChecked]) => isChecked)
        .map(([brand]) => brand);

      const filteredProducts = products?.filter((product) => {
        const productBrand = product.brand;
        return !activeBrands.length || activeBrands.includes(productBrand);
      });
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [filters]);

  console.log(filters);

  return (
    <ul className={classes.home__products__block}>
      {filteredProducts?.map((item: TCardProps) => (
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
};

export default CardList;
