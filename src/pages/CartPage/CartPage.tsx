import React, { useEffect } from "react";
import Container from "../../components/Container/Container";

import classes from "./CartPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addOne,
  loadCart,
  removeCart,
  removeOne,
} from "../../redux/slice/cart";

import Elements from "./components/Elemets/Elements";
import CartForm from "./components/CartForm/CartForm";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    console.log(cart);
    console.log(sumPriceAllProductsCart());
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const handleRemoveProduct = (id: number) => {
    dispatch(removeCart(id));
  };

  const handleAddCart = (id: number) => {
    dispatch(addOne(id));
  };

  const handleRemoveCart = (id: number) => {
    dispatch(removeOne(id));
  };

  const sumPriceAllProductsCart = () => {
    let sum = 0;
    for (const value of cart) {
      sum += value.quantityPrice!;
    }
    return sum;
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.cart__list__wrapper}>
          <h2>Shopping Cart</h2>
          <ul className={classes.cart__list__wrapper__container}>
            {cart &&
              cart.map((item) => (
                <Elements
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.quantityPrice ?? item.price}
                  image={item.image}
                  quantity={item.quantity ?? 0}
                  handleRemoveCart={handleRemoveCart}
                  handleAddCart={handleAddCart}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))}
          </ul>
        </div>
        <div className={classes.cart__summary__wrapper}>
          <CartForm sumPriceAllProductsCart={sumPriceAllProductsCart} />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
