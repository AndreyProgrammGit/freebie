import ProductsContainer from "./ProductsContainer/ProductsContainer";
import SummaryTotal from "../../../../../components/SummaryTotal/SummaryTotal";
import { sumPriceAllProducts } from "../../../../../utils/sumPriceAllProducts";
import { useAppSelector } from "../../../../../redux/hooks";

import classes from "./Summary.module.scss";
import { useGetOrderDiscountQuery } from "../../../../../redux/slice/api/orderDiscount";

interface DiscountCode {
  id: number;
  code: number | string;
  sale: number;
}

interface DiscountBonus {
  id: number;
  bonus: number | string;
  sale: number;
}

interface DiscountData {
  discount_codes: DiscountCode[];
  discount_bonuses: DiscountBonus[];
}

const Summary = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const {
    isChooseAddress,
    paymentMethod: { method },
  } = useAppSelector((state) => state.payment);

  const { data } = useGetOrderDiscountQuery() as {
    data: DiscountData | undefined;
  };

  const { code, bonus } = JSON.parse(
    localStorage.getItem("bonus_code") ||
      JSON.stringify({
        code: 0,
        bonus: 0,
      }),
  );

  return (
    <div className={classes.wrapper}>
      <h1>Summary</h1>
      <ProductsContainer cart={cart} />
      <div className={classes.wrapper__info}>
        <div className={classes.wrapper__info__address}>
          <h2>Address</h2>
          <span>{isChooseAddress}</span>
        </div>
        <div className={classes.wrapper__info__method}>
          <h2>Method</h2>
          <span>{method}</span>
        </div>
      </div>
      <SummaryTotal
        data={data ?? { discount_codes: [], discount_bonuses: [] }}
        code={+code}
        bonus={+bonus}
        sumPriceAllProducts={() => sumPriceAllProducts(cart)}
      />
    </div>
  );
};

export default Summary;
