import { type FC, useEffect, useReducer, useState } from "react";

import classes from "./CartForm.module.scss";
import SummaryTotal from "../../../../components/SummaryTotal/SummaryTotal";
import { useGetOrderDiscountQuery } from "../../../../redux/slice/api/orderDiscount";
import { useNavigate } from "react-router";

type State = { code: string; bonus: string };
type Action =
  | { type: "SET_CODE"; payload: string }
  | { type: "SET_BONUS"; payload: string }
  | { type: "RESET_FORM" };

type TProps = {
  sumPriceAllProducts: () => number;
};

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

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.payload };
    case "SET_BONUS":
      return { ...state, bonus: action.payload };
    case "RESET_FORM":
      return { bonus: "", code: "" };
    default:
      return state;
  }
};

const CartForm: FC<TProps> = ({ sumPriceAllProducts }) => {
  const [state, dispatch] = useReducer(reducer, {
    code: "",
    bonus: "",
  });
  const [apply, setApply] = useState<string>("");
  const navigate = useNavigate();

  const { data } = useGetOrderDiscountQuery() as {
    data: DiscountData | undefined;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit state", state);
    localStorage.setItem("bonus_code", JSON.stringify(state));
    dispatch({ type: "RESET_FORM" });
    navigate("/payment/1");
  };

  useEffect(() => {
    console.log("update state", state);
  }, [state]);

  return (
    <form
      className={classes.cart__summary__wrapper__form}
      onSubmit={handleSubmit}
    >
      <h2>Order Summary</h2>
      <div className={classes.cart__summary__wrapper__form__discount}>
        <label htmlFor="code">Discount code / Promo code</label>
        <input
          type="text"
          placeholder="Code"
          id="code"
          name="code"
          value={state.code}
          onChange={(e) =>
            dispatch({ type: "SET_CODE", payload: e.target.value })
          }
        />
      </div>

      <div className={classes.cart__summary__wrapper__form__bonus}>
        <label htmlFor="bonus">Your bonus card number</label>
        <div>
          <input
            type="text"
            placeholder="Bonus"
            id="bonus"
            name="bonus"
            value={apply}
            onChange={(e) => setApply(e.target.value)}
          />
          <button
            type="button"
            onClick={() => dispatch({ type: "SET_BONUS", payload: apply })}
          >
            Apply
          </button>
        </div>
      </div>

      <SummaryTotal
        sumPriceAllProducts={sumPriceAllProducts}
        code={state.code}
        bonus={state.bonus}
        data={data ?? { discount_codes: [], discount_bonuses: [] }}
      />
      <button className={classes.cart__summary__wrapper__form__button}>
        Checkout
      </button>
    </form>
  );
};

export default CartForm;
