import Summary from "./Summary/Summary";

import classes from "./Payment.module.scss";
import PaymentForm from "./PaymentForm/PaymentForm";
import type {FC, RefObject} from "react";

interface TProps {
    onSubmitRef: RefObject<(() => void) | null>
}

const Payment:FC<TProps> = ({onSubmitRef}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__summary}>
        <Summary />
      </div>
      <div className={classes.wrapper__payment_form}>
        <PaymentForm onSubmitRef={onSubmitRef}/>
      </div>
    </div>
  );
};

export default Payment;
