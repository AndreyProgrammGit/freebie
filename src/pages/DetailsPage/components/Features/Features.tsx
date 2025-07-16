import React, { type FC } from "react";
import classes from "./Features.module.scss";
import type { Spec } from "../../DetailsPage";
import svg from "../../../../assets/icons/some.svg";

type TProps = {
  data: Spec[];
};

const FeaturesItem = ({
  label,
  // icon,
  desc,
}: {
  label: string;
  icon: string;
  desc: string;
}) => (
  <li className={classes.list__container__item}>
    <div className={classes.list__container__item__icon}>
      <img src={svg} alt="" />
    </div>
    <div className={classes.list__container__item__desc}>
      <span style={{ color: "#4E4E4E", opacity: "0.7" }}>{label}</span>
      <span style={{ color: "#000000" }}>{desc}</span>
    </div>
  </li>
);

const Features: FC<TProps> = ({ data }) => {
  //   console.log(data);
  return (
    <ul className={classes.list__container}>
      {data?.map((item, index) => (
        <FeaturesItem
          key={index}
          label={item.label}
          icon={item.icon}
          desc={item.desc}
        />
      ))}
      {/* <li className={classes.list__container__item}>
        <span>screenSize</span>
        <span>{data?.screenSize}</span>
      </li>
      <li className={classes.list__container__item}>
        <span>CPU</span>
        <span>{data?.cpu}</span>
      </li>
      <li className={classes.list__container__item}>
        <span>Number of Cores</span>
        <span>{data?.numberOfCores}</span>
      </li>
      <li className={classes.list__container__item}>
        <span>Main camera</span>
        <span>{data?.mainCamera}</span>
      </li>
      <li className={classes.list__container__item}>
        <span>Front-camera</span>
        <span>{data?.frontCamera}</span>
      </li>
      <li className={classes.list__container__item}>
        <span>Battery capacity</span>
        <span>{data?.batteryCapacity}</span>
      </li> */}
    </ul>
  );
};

export default Features;
