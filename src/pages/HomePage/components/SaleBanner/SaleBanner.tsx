import React from "react";
import classes from "./SaleBanner.module.scss";
import sale from "../../images/sale.png";

const SaleBanner = () => {
  return (
    <div className={classes.home__sale}>
      <div className={classes.home__sale__container}>
        <div className={classes.home__sale__container__info}>
          <div>
            <h2>
              Big Summer <b>Sale</b>
            </h2>
            <span>Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
          </div>
          <button>
            <span>Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
