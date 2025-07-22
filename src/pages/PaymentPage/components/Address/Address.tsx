import React, { useEffect, useState, type FC } from "react";

import classes from "./Address.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Elements from "./Elements/Elements";
import {
  loadStorage,
  removeOne,
  addNewAddress,
} from "../../../../redux/slice/address";
import { chooseAddress } from "../../../../redux/slice/payment";

const Address = () => {
  const { address } = useAppSelector((state) => state.address);
  const isChooseAddress = useAppSelector(
    (state) => state.payment.isChooseAddress
  );

  const dispatch = useAppDispatch();

  const handleRemove = (title: string) => {
    dispatch(removeOne(title));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
    address: string
  ) => {
    const { value } = e.target;

    const updated = {
      title,
      isChecked: value,
      address,
    };
    dispatch(chooseAddress(updated.address));
  };

  useEffect(() => {
    dispatch(loadStorage());
  }, []);

  return (
    <div className={classes.wrapper}>
      <h2>Select Address</h2>
      <div className={classes.elements__wrapper}>
        {address.map((item) => (
          <Elements
            key={item.title}
            {...item}
            handleRemove={handleRemove}
            handleInputChange={handleInputChange}
            isChooseAddress={isChooseAddress}
          />
        ))}
      </div>
      <div
        className={classes.add_address_wrapper}
        onClick={() => dispatch(addNewAddress(""))}
      >
        <div className={classes.line_with_icon}>
          <div className={classes.line}></div>
          <div className={classes.icon}>
            <span>+</span>
          </div>
          <div className={classes.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Address;
