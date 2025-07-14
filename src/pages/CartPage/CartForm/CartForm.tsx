import React from "react";

import classes from "./CartForm.module.scss";

const CartForm = () => (
  <form action="" className={classes.cart__summary__wrapper__form}>
    <h2>Order Summary</h2>
    <div className={classes.cart__summary__wrapper__form__discount}>
      <label htmlFor="">Discount code / Promo code</label>
      <input type="text" placeholder="Code" />
    </div>
    <div className={classes.cart__summary__wrapper__form__bonus}>
      <label htmlFor="">Your bonus card number</label>
      <input type="text" placeholder="Bonus" />
    </div>
    <div className={classes.cart__summary__wrapper__form__total}>
      <div className={classes.cart__summary__wrapper__form__total__subtotal}>
        <span>Subtotal</span>
        <span>1000</span>
      </div>
      <div className={classes.cart__summary__wrapper__form__total__tax}>
        <div className={classes.cart__summary__wrapper__form__total__tax__item}>
          <span>Estimated Tax</span>
          <span>50</span>
        </div>
        <div className={classes.cart__summary__wrapper__form__total__tax__item}>
          <span>Estimated shipping & Handling</span>
          <span>50</span>
        </div>
      </div>
      <div className={classes.cart__summary__wrapper__form__total__total}>
        <span>Total</span>
        <span>2422</span>
      </div>
    </div>
    <button>Checkout</button>
  </form>
);

export default CartForm;
