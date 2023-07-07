import React from "react";
import classes from "./newletters.module.css";
import { AiOutlineSend } from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg";

const NewLetters = () => {
  return (
    <section id="contacts" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Recevez nos dernières offres</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder="Entrer votre email" />
          <AiOutlineSend className={classes.sendIcon} />
        </div>
        <img src={newsletterIllustration} className={classes.illustration} />
      </div>
    </section>
  );
};

export default NewLetters;
