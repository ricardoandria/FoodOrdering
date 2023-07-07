import React from "react";
import classes from "./home.module.css";
import Hero from "../hero/Hero";
import illustration1 from "../../assets/deliveryot.svg";
import illustration2 from "../../assets/work.svg";
import illustration3 from "../../assets/social.svg";
import Foods from "../foods/Foods";
import NewLetters from "../newletters/NewLetters";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Livraison</span>
            <h2 className={classes.deliveryTitle}>Toujours à l'heure pour vous</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg} />
              <h3>Notre livreur est toujours à l'heure</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.SecondImg} />
              <h3>Il travaille très dur</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.ThirdImg} />
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div>
        <Foods />
        <NewLetters />
      </div>
    </div>
  );
};

export default Home;
