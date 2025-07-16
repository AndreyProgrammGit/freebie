import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CardList from "../../components/CardList/CardList";
import { useGetProductsQuery } from "../../redux/slice/api/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToFavorite,
  removeOne,
  type Favorite,
} from "../../redux/slice/favorite";
import Container from "../../components/Container/Container";

import classes from "./Products.module.scss";

const Products = () => {
  const { data: products } = useGetProductsQuery();
  const dispatch = useAppDispatch();

  const { favorite } = useAppSelector((state) => state.favorite);

  const favoriteIds = favorite.map((el) => el.id);

  const handleAddToFavorite = (data: Favorite) => {
    dispatch(addToFavorite(data));
  };

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeOne(id));
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.sidebar__container}>
          <Sidebar />
        </div>
        <div className={classes.card_list__container}>
          <div className={classes.card_list__container__filter}>
            <span></span>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <CardList
            favoriteIds={favoriteIds}
            products={products}
            handleAddToFavorite={handleAddToFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        </div>
      </div>
    </Container>
  );
};

export default Products;
