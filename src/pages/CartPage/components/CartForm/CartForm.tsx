import React, { type FC } from "react";

import classes from "./CartForm.module.scss";

type TProps = {
  sumPriceAllProductsCart: () => number;
};

const CartForm: FC<TProps> = ({ sumPriceAllProductsCart }) => (
  <form action="" className={classes.cart__summary__wrapper__form}>
    <h2>Order Summary</h2>
    <div className={classes.cart__summary__wrapper__form__discount}>
      <label htmlFor="">Discount code / Promo code</label>
      <input type="text" placeholder="Code" id="code" name="code" />
    </div>
    <div className={classes.cart__summary__wrapper__form__bonus}>
      <label htmlFor="">Your bonus card number</label>
      <form action="">
        <div>
          <input type="text" placeholder="Bonus" id="bonus" name="bonus" />
          <button>Apply</button>
        </div>
      </form>
    </div>
    <div className={classes.cart__summary__wrapper__form__total}>
      <div className={classes.cart__summary__wrapper__form__total__subtotal}>
        <span>Subtotal</span>
        <span>${sumPriceAllProductsCart()}</span>
      </div>
      <div className={classes.cart__summary__wrapper__form__total__tax}>
        <div className={classes.cart__summary__wrapper__form__total__tax__item}>
          <span>Estimated Tax</span>
          <span>$50</span>
        </div>
        <div className={classes.cart__summary__wrapper__form__total__tax__item}>
          <span>Estimated shipping & Handling</span>
          <span>$50</span>
        </div>
      </div>
      <div className={classes.cart__summary__wrapper__form__total__total}>
        <span>Total</span>
        <span>${sumPriceAllProductsCart() + 50 + 50}</span>
      </div>
    </div>
    <button className={classes.cart__summary__wrapper__form__button}>
      Checkout
    </button>
  </form>
);

export default CartForm;
