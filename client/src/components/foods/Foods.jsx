import React from "react";
import { foodTypes } from "../../data/data";
import classes from "./foods.module.css";
import { Link } from "react-router-dom";

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Ce que nous offrons</h4>
        <h2 className={classes.title}>Meilleur repas de la ville</h2>
        <div className={classes.foods}>
          {foodTypes.map((foodType) => (
            <Link
              to={`/foods/${foodType.name}`}
              key={foodType.id}
              className={classes.food}
            >
              <h4>{foodType.name}</h4>
              <div className={classes.imgContainer}>
                <img src={foodType.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
