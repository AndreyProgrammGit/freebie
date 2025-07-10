import React from "react";
import classes from "./Footer.module.scss";
import List from "./components/List/List";
import { services, assistance } from "./content";
import LogoIcon from "../../components/images/LogoIcon";

const Footer = () => {
  return (
    <div className={classes.footer__wrapper}>
      <div className={classes.footer__container}>
        <div className={classes.footer__container__logo}>
          <h2>
            <LogoIcon color="white" />
          </h2>
          <span>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </span>
        </div>
        <List content={services} title="Sevices" />
        <List content={assistance} title="Assistance" />
      </div>
    </div>
  );
};

export default Footer;
