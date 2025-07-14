import classes from "./HomePage.module.scss";
import phone from "./images/phone.png";
import headphones from "./images/banner/headphones.png";
import oculus from "./images/banner/oculus.png";
import playstation from "./images/banner/PlayStation.png";
import macbook from "./images/banner/macbook.png";
import { useGetProductsQuery } from "../../redux/slice/api/products";
import CardList from "../../components/CardList/CardList";
import { LOCALSTORAGE_NAME_FAVORITE } from "../../constant";
import { Category } from "../../components/Category/Category";
import { useGetCategoriesQuery } from "../../redux/slice/api/categories";
import { Banner } from "../../components/Banner/Banner";
import { useGetBannerQuery } from "../../redux/slice/api/banner";
import { useGetDiscountsQuery } from "../../redux/slice/api/discounts";
import SaleBanner from "./components/SaleBanner/SaleBanner";
import { useEffect } from "react";

const HomePage = () => {
  const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: banner } = useGetBannerQuery();
  const { data: discounts } = useGetDiscountsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (id: number) => {
    const data =
      localStorage
        .getItem(LOCALSTORAGE_NAME_FAVORITE)
        ?.split(",")
        .filter(Boolean) || [];
    const strId = id.toString();

    const newData = data.includes(strId)
      ? data.filter((item) => item !== strId)
      : [...data, strId];

    localStorage.setItem(LOCALSTORAGE_NAME_FAVORITE, newData.join(","));
  };

  return (
    <div className={classes.home__wrapper}>
      <div className={classes.home__container}>
        <div className={classes.home__banner}>
          <div className={classes.home__content}>
            <div className={classes.home__content__title}>
              <span className={classes.home__content__title__item1}>
                Pro.Beyond.
              </span>
              <span className={classes.home__content__title__item2}>
                IPhone 14 <b>Pro</b>
              </span>
            </div>
            <div className={classes.home__content__desc}>
              <span className={classes.home__content__desc__item}>
                Created to change everything for the better. For everyone
              </span>
            </div>
            <div className={classes.home__content__button}>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={classes.home__image}>
            <img src={phone} alt="" />
          </div>
        </div>
        <div className={classes.home__small_banner}>
          <div className={classes.home__small_banner__left}>
            <div className={classes.home__small_banner__playstation}>
              <img src={playstation} alt="#" />
              <div className={classes.home__small_banner__playstation__desc}>
                <h2>Playstation 5</h2>
                <span>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </span>
              </div>
            </div>
            <div className={classes.home__small_banner__airPods}>
              <img src={headphones} alt="" />
              <div className={classes.home__small_banner__airPods__desc}>
                <h2>
                  Apple <br />
                  AirPods <br />
                  <b>Max</b>
                </h2>
                <span>
                  Computational audio. <br /> Listen, it's powerful
                </span>
              </div>
            </div>
            <div className={classes.home__small_banner__oculus}>
              <img src={oculus} alt="" />
              <div className={classes.home__small_banner__oculus__desc}>
                <h2>
                  Apple <br />
                  Vision <b>Pro</b>
                </h2>
                <span>
                  An immersive way to <br /> experience entertainment
                </span>
              </div>
            </div>
          </div>
          <div className={classes.home__small_banner__rigth}>
            <div className={classes.home__small_banner__macbook}>
              <img src={macbook} alt="#" />
              <div className={classes.home__small_banner__macbook__desc}>
                <h2>
                  Macbook <br /> <b>Air</b>
                </h2>
                <span>
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </span>
                <button>Shop now</button>
              </div>
            </div>
          </div>
        </div>
        <Category categories={categories} />
        <div className={classes.home__products}>
          <div className={classes.home__products__tags}>
            <span className={classes.active}>New Arrival</span>
            <span>Bestseller</span>
            <span>Featured Products</span>
          </div>
          <CardList handleAddToCart={handleAddToCart} products={products} />
        </div>
        <Banner items={banner} />
        <div className={classes.home__discounts}>
          <h2>Discounts up to -50%</h2>
          <CardList handleAddToCart={handleAddToCart} products={discounts} />
        </div>
        <SaleBanner />
      </div>
    </div>
  );
};

export default HomePage;
