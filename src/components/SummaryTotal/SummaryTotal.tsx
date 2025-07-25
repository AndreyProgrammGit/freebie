import { type FC } from "react";

import classes from "./SummaryTotal.module.scss";
import { calcTotalWithCodeBonus } from "../../utils/calcTotalWithCodeBonus.ts";

interface TProps {
  sumPriceAllProducts: () => number;
  code: number | string;
  bonus: number | string;
  data: {
    discount_codes: {
      id: number;
      code: number | string;
      sale: number;
    }[];
    discount_bonuses: {
      id: number;
      bonus: number | string;
      sale: number;
    }[];
  };
}

const SummaryTotal: FC<TProps> = ({
  sumPriceAllProducts,
  code,
  bonus,
  data,
}) => {
  const { codeSale, bonusSale } = calcTotalWithCodeBonus(data, +code, +bonus);

  return (
    <div className={classes.summary__wrapper__form__total}>
      <div className={classes.summary__wrapper__form__total__subtotal}>
        <span>
          <b>Subtotal</b>
        </span>
        <span>${sumPriceAllProducts()}</span>
      </div>
      <div className={classes.summary__wrapper__form__total__tax}>
        <div className={classes.summary__wrapper__form__total__tax__item}>
          <span>Estimated Tax</span>
          <span>$50</span>
        </div>
        <div className={classes.summary__wrapper__form__total__tax__item}>
          <span>Estimated shipping & Handling</span>
          <span>$50</span>
        </div>
      </div>
      <div className={classes.summary__wrapper__form__total__total}>
        <span>
          <b>Total</b>
        </span>
        <span>
          <b
            style={{
              textDecoration: codeSale || bonusSale ? "line-through" : "",
              color: codeSale || bonusSale ? "red" : "",
            }}
          >
            ${sumPriceAllProducts() + 50 + 50}
          </b>
          {codeSale || bonusSale ? (
            <span style={{ marginLeft: "5px" }}>
              <b>${sumPriceAllProducts() + 50 + 50 - codeSale - bonusSale}</b>
            </span>
          ) : null}
          {/*{calcTotalWithCodeBonus()}*/}
        </span>
      </div>
    </div>
  );
};

export default SummaryTotal;
