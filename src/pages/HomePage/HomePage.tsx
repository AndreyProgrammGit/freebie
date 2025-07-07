import classes from "./HomePage.module.scss";
import phone from "./image/phone.png";
import headphones from "./image/headphones.png";
import oculus from "./image/oculus.png";
import playstation from "./image/PlayStation.png";
import macbook from "./image/macbook.png";

const HomePage = () => {
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
      </div>
    </div>
  );
};

export default HomePage;
