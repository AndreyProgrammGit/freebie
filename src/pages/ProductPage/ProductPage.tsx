import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../../redux/slice/api/products";
import { useParams } from "react-router";

import classes from "./ProductPage.module.scss";
import Features from "./components/Features/Features";
import NotFound from "../NotFound/NotFound";
import Storage from "./components/Storage/Storage";
import ProductColors from "./components/ProductColors/ProductColors";
import Container from "../../components/Container/Container";
import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/slice/cart";

export type Spec = {
  label: string;
  icon: string;
  desc: string;
};

export type Data = {
  id: number;
  name: string;
  originalPrice: number;
  desc: string;
  price: number;
  quantityPrice?: number;
  image: string;
  isFavorite: boolean;
  availableColors: string[];
  specifications: Spec[];
  quantity?: number;
  availableStorageOptions: {
    storage: string;
    isAvailable: boolean;
  }[];
};

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(+id!);
  const [storageSize, setStorageSize] = useState<string | undefined>();
  const [selectColor, setSelectColor] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    setStorageSize(
      data?.availableStorageOptions.find((el) => el.isAvailable)?.storage
    );
    setSelectColor(data?.availableColors[0]);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChangeStorageSize = (size: string) => {
    const tmp = data?.availableStorageOptions.find((el) => el.storage === size);

    if (tmp?.isAvailable) setStorageSize(size);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleChangeColor = (color: string) => {
    setSelectColor(data?.availableColors[data?.availableColors.indexOf(color)]);
  };

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className={classes.product__wrapper}>
      <Container>
        <div className={classes.product__container__breadcrumbs}></div>
        <div className={classes.product__container__item}>
          <div className={classes.product__container__item__slider}>SLIDER</div>
          <div className={classes.product__container__item__info}>
            {" "}
            <h2 style={{ margin: 0 }}>{data.name}</h2>
            <h3 style={{ margin: 0 }}>{data.originalPrice}$</h3>
            <div>
              <ProductColors
                handleChangeColor={handleChangeColor}
                selectColor={selectColor}
                colors={data.availableColors}
              />
            </div>
            <div>
              <Storage
                handleChangeStorageSize={handleChangeStorageSize}
                isSelect={storageSize}
                storage={data.availableStorageOptions}
              />
            </div>
            <div>
              <Features data={data.specifications} />
            </div>
            <div>
              <span className={classes.product__container__item__info__desc}>
                {data?.desc}
              </span>
            </div>
            <ButtonGroup
              buttonTextFirst="Add to Wishlist"
              buttonTextSecond="Add to Card"
              buttonClick={handleAddToCart}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
