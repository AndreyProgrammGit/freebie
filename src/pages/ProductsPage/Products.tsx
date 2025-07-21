import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CardList from "../../components/CardList/CardList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToFavorite,
  removeOne,
  type Favorite,
} from "../../redux/slice/favorite";
import Container from "../../components/Container/Container";

import classes from "./Products.module.scss";
import { useFilter } from "../../context/filterContext";
import PaginatedItems from "../../components/Pagination/Pagination";

const Products = () => {
  const dispatch = useAppDispatch();

  const [filterBy, setFilterBy] = useState("");

  const { favorite } = useAppSelector((state) => state.favorite);
  const { filteredArr } = useFilter();

  const favoriteIds = favorite.map((el) => el.id);

  const handleAddToFavorite = (data: Favorite) => {
    dispatch(addToFavorite(data));
  };

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeOne(id));
  };

  const filterArrayBy = () => {
    return [...filteredArr].sort((a, b) => a[filterBy] - b[filterBy]);
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.sidebar__container}>
          <Sidebar />
        </div>
        <div className={classes.card_list__container}>
          <div className={classes.card_list__container__filter}>
            <span>Selected products: {filteredArr.length}</span>
            <div className={classes.custom_select_wrapper}>
              <select
                onChange={(e) => setFilterBy(e.target.value)}
                name="select_filter"
                id="select_filter"
              >
                <option value="">Select filter</option>
                <option value="price">By price</option>
              </select>
            </div>
          </div>
          <PaginatedItems
            itemsPerPage={6}
            items={filterArrayBy()}
            renderComponent={(currentItems) => (
              <CardList
                favoriteIds={favoriteIds}
                products={currentItems}
                handleAddToFavorite={handleAddToFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
              />
            )}
          />
        </div>
      </div>
    </Container>
  );
};

export default Products;
