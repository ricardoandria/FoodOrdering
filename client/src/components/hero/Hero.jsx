import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import deliveryMan from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Avez-vous envie de nourriture délicieuse</h2>
          <p className={classes.firstMsg}>
          Mais sortir pour prendre de la nourriture  <span>coûte du temps...</span>
          </p>
          <p className={classes.secondMsg}>
          Pourquoi ne pas commander une     <span>pizza</span> ou quelque chose <br />{" "}
            <span>de délicieux</span> dans notre restaurant
          </p>
          <p className={classes.desc}>
          Notre restaurant place toujours le client au-dessus. Ce sont nos célibataires
             chose la plus importante pour notre entreprise.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Commander Maintenant!</button>
            <button className={classes.buttonSee}>
              <a href="#">
              Voir ce qui est disponible <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={deliveryMan} className={classes.imgHero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
