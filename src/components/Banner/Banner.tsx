import React from "react";

export const Banner = () => (
  <div className={"classes.home__banners"}>
    <div className={"classes.home__banners__item"}>
      <img src={"ipad"} alt="ipad" />
      <div>
        <h2>Popular Products</h2>
        <span>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </span>
      </div>
      <button>Shop Now</button>
    </div>
  </div>
);
