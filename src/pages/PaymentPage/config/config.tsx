import AddressIcon from "../../../components/images/AddressIcon";
import PaymentIcon from "../../../components/images/PaymentIcon";
import ShippingIcon from "../../../components/images/ShippingIcon";
import { addDays } from "./util/util";

export const steps = [
  {
    step: 1,
    title: "Address",
    img: <AddressIcon />,
  },
  {
    step: 2,
    title: "Shipping",
    img: <ShippingIcon />,
  },
  {
    step: 3,
    title: "Payment",
    img: <PaymentIcon />,
  },
];

export const shipmentMethod = [
  {
    method: "Free",
    title: "Regulary shipment",
    date: addDays(16),
  },
  {
    method: "$8.50",
    title: "Get your delivery as soon as possible",
    date: addDays(2),
  },
  {
    method: "Schedule",
    title: "Pick a date when you want to get your delivery",
    date: null,
  },
];
