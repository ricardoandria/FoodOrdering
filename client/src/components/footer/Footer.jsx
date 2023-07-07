import React from "react";
import classes from "./footer.module.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Jours de travail</h2>
          <ul className={classes.list}>
            <li>Lundi - vendredi</li>
            <li className={classes.workingTime}>08:00 - 22:00</li>
            <li>Samedi</li>
            <li className={classes.workingTime}>08:00 - 20:00</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Newsletter</h2>
          <ul className={classes.list}>
            <li>Abonnez-vous à notre newsletter</li>
            <li>Recevez les derniers repas</li>
            <li>Obtenez le menu avec les promos</li>
            <li>Tout hebdomadaire!</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Réseaux sociaux</h2>
          <ul className={classes.iconList}>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
