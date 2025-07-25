import Container from "../../components/Container/Container";
import Steps from "./components/Steps/Steps.tsx";
import { steps } from "./config/config.tsx";

import classes from "./PaymentPage.module.scss";
import { Navigate, useNavigate, useParams } from "react-router";
import Address from "./components/Address/Address.tsx";
import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup.tsx";
import Shipping from "./components/Shipping/Shipping.tsx";
import { useAppSelector } from "../../redux/hooks.ts";
import Payment from "./components/Payment/Payment.tsx";
import {useRef} from "react";

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isChooseAddress, paymentMethod } = useAppSelector(
    (state) => state.payment
  );
  const paySubmitRef = useRef<(() => void) | null>(null);

  if (id && +id > steps.length) {
    return <Navigate to="not-found" replace />;
  }

  const handleBack = () => {
    const prevStep = Math.max(1, +id! - 1);
    navigate(`/payment/${prevStep}`);
  };

  const handleNext = () => {
    const nextStep = Math.min(steps.length, +id! + 1);

    if (+id! === 1 && !isChooseAddress) return;
    else if (+id! === 2 && !paymentMethod.delivery) return;
    else if (+id! === 3) {
      if (paySubmitRef.current) {
        paySubmitRef.current();
      }
      return;
    }

    navigate(`/payment/${nextStep}`);
  };

  const renderBlock = () => {
    switch (id) {
      case "1":
        return <Address />;
        break;
      case "2":
        return <Shipping />;
        break;
      case "3":
        return <Payment onSubmitRef={paySubmitRef} />;
      default:
        break;
    }
  };

  return (
    <Container>
      <div className={classes.steps}>
        {steps.map((item, index) => (
          <Steps key={item.step} {...item} id={+id!} index={index + 1} />
        ))}
      </div>
      <div className={classes.payment__container}>{renderBlock()}</div>

      <div className={classes.buttons}>
        <ButtonGroup
          buttonTextFirst={"Back"}
          buttonTextSecond={+id! !== 3 ? "Next" : "Pay"}
          buttonFirstClick={handleBack}
          buttonSecondClick={handleNext}
        />
      </div>
    </Container>
  );
};

export default PaymentPage;
