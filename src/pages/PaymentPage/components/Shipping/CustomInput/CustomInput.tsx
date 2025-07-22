import React, { forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import classes from "./CustomInput.module.scss";

const CustomDateInput = forwardRef<
  HTMLButtonElement,
  { value?: string; onClick?: () => void }
>(({ value, onClick }, ref) => (
  <button className={classes.datepickerButton} onClick={onClick} ref={ref}>
    {value || "Select Date"}
    <FaChevronDown className={classes.icon} />
  </button>
));

CustomDateInput.displayName = "CustomDateInput";

export default CustomDateInput;
