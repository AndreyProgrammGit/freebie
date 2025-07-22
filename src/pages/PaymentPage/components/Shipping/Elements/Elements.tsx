import React, { type FC } from "react";

import classes from "./Elements.module.scss";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../CustomInput/CustomInput";
import { addDays } from "../../../config/util/util";

interface TProps {
  method: string;
  title: string;
  date: any;
  startDate: any;
  setStartDate: (date: Date | null) => void;
  handleShipmentMethod: (method: string, delivery: Date) => void;
  paymentMethod: {
    method: string;
    delivery: string;
  };
}

const Elements: FC<TProps> = ({
  method,
  title,
  date,
  setStartDate,
  startDate,
  handleShipmentMethod,
  paymentMethod,
}) => {
  const renderBlock = () => {
    return date ? (
      date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    ) : (
      <DatePicker
        selected={startDate}
        onChange={(e) => {
          setStartDate(e);
          handleShipmentMethod(method, e!);
        }}
        customInput={<CustomInput />}
        minDate={addDays(2)}
      />
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__items}>
        <div className={classes.container__items__info}>
          <input
            type="radio"
            name="shipment_method"
            checked={paymentMethod.method === method}
            onChange={() => handleShipmentMethod(method, date)}
          />
          <span>{method}</span>
          <span>{title}</span>
        </div>
        <div className={classes.container__items__date}>
          <span>{renderBlock()}</span>
        </div>
      </div>
    </div>
  );
};

export default Elements;
