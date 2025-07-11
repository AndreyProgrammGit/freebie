import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../../redux/slice/products";
import { useParams } from "react-router";

import classes from "./ProductPage.module.scss";
import Features from "./components/Features/Features";
import NotFound from "../NotFound/NotFound";
import Storage from "./components/Storage/Storage";
import ProductColors from "./components/ProductColors/ProductColors";
import Container from "../../components/Container/Container";

export type Spec = {
  label: string;
  icon: string;
  desc: string;
};

type Data = {
  data:
    | {
        name: string;
        originalPrice: number;
        availableColors: string[];
        specifications: Spec[];
        availableStorageOptions: {
          storage: "string";
          isAvailable: boolean;
        }[];
      }
    | undefined;
};

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery<Data>(+id!);
  const [storageSize, setStorageSize] = useState<string | undefined>();
  const [selectColor, setSelectColor] = useState<string | undefined>("");

  console.log(selectColor);
  useEffect(() => {
    setStorageSize(
      data?.availableStorageOptions.find((el) => el.isAvailable)?.storage
    );
    setSelectColor(data?.availableColors[0]);
  }, [data]);

  const handleChangeStorageSize = (size: string) => {
    const tmp = data?.availableStorageOptions.find((el) => el.storage === size);

    if (tmp?.isAvailable) setStorageSize(size);
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
