import PaymentMethods from "./PaymentMethods/PaymentMethods";
import Card from "./Card/Card";
import Form from "./Form/Form";

import classes from "./PaymentForm.module.scss";
import type {FC, RefObject} from "react";

interface TProps {
    onSubmitRef: RefObject<(() => void) | null>
}

const PaymentForm:FC<TProps> = ({onSubmitRef}) => {
  return (
    <div className={classes.wrapper}>
      <h1>Payment</h1>
      <PaymentMethods />
      <Card />
      <Form onSubmitRef={onSubmitRef}  />
    </div>
  );
};

export default PaymentForm;
