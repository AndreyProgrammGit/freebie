import { useState } from "react";
import { paymentMethods } from "../config/config";
import Elements from "./Elements/Elements";

import classes from "./PaymentMethods.module.scss";

const PaymentMethods = () => {
  const [currentMethod, setCurrentMethod] = useState<string>("Credit Card"); // начальное значение

  const handleChangeMethod = (method: string) => {
    setCurrentMethod(method);
    console.log("Current:", method);
  };

  return (
    <div className={classes.wrapper}>
      {paymentMethods.map((item) => (
        <Elements
          key={item.id}
          method={item.method}
          selectedMethod={currentMethod}
          handleChangeMethod={handleChangeMethod}
        />
      ))}
    </div>
  );
};

export default PaymentMethods;
