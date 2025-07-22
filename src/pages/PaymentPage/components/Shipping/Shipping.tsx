import React, { useState } from "react";

import classes from "./Shipping.module.scss";
import { shipmentMethod } from "../../config/config";
import Elements from "./Elements/Elements";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { chooseShipmentMethod } from "../../../../redux/slice/payment";
import { addDays } from "../../config/util/util";

const Shipping = () => {
  const [startDate, setStartDate] = useState<any>(addDays(2));
  const { paymentMethod } = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();

  const handleShipmentMethod = (method: string, delivery: Date) => {
    dispatch(
      chooseShipmentMethod({
        method,
        delivery: delivery
          ? delivery.toLocaleDateString()
          : startDate.toLocaleDateString(),
      })
    );
  };

  return (
    <div className={classes.wrapper}>
      <h2>Shipment Method</h2>
      <div className={classes.wrapper__wrapper_elements}>
        {shipmentMethod.map((item) => (
          <Elements
            {...item}
            startDate={startDate}
            setStartDate={setStartDate}
            handleShipmentMethod={handleShipmentMethod}
            paymentMethod={paymentMethod}
          />
        ))}
      </div>
    </div>
  );
};

export default Shipping;
