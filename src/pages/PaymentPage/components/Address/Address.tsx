import React, { useEffect, useState, type FC } from "react";

import classes from "./Address.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Elements from "./Elements/Elements";
import { loadStorage, removeOne } from "../../../../redux/slice/address";
import Constructor from "../Constructor/Constructor";

const Address = () => {
  const { address } = useAppSelector((state) => state.address);
  const [flag, setFlag] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleRemove = (title: string) => {
    dispatch(removeOne(title));
  };

  useEffect(() => {
    dispatch(loadStorage());
  }, []);

  return (
    <div className={classes.wrapper}>
      <h2>Select Address</h2>
      <div className={classes.elements__wrapper}>
        {address.map((item) => (
          <Elements key={item.title} {...item} handleRemove={handleRemove} />
        ))}
      </div>
      <div
        className={classes.add_address_wrapper}
        onClick={() => setFlag((prev) => !prev)}
      >
        <div className={classes.line_with_icon}>
          <div className={classes.line}></div>
          <div className={classes.icon}>
            <span>+</span>
          </div>
          <div className={classes.line}></div>
        </div>
      </div>
      {flag ? <Constructor /> : null}
    </div>
  );
};

export default Address;
