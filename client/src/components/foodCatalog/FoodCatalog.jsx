import React, { useEffect, useState } from "react";
import classes from "./foodcatalog.module.css";
import {Link, useLocation} from "react-router-dom" 
import {useSelector} from "react-redux"

const FoodCatalog = () => {
  const [filteredFoods,setFilteredFoods] = useState([])
  const location = useLocation()

 

  const foodEnpoint = location.pathname.split("/")[2]

  const {token} = useSelector((state) => state.auth)

  useEffect(() => {
    const getFoodType = async() => {
      const res = await fetch(`http://localhost:5000/product?category=${foodEnpoint}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
        
      })
      const data = await res.json()
      console.log(data);
      setFilteredFoods(data)
    }
    getFoodType()
  },[foodEnpoint])

  return <div className={classes.container}>
    <div className={classes.wrapper}>
      {
        filteredFoods?.length !==0 &&      <h2 className={classes.title}>
        The best {foodEnpoint} in the region
      </h2>
      }

      <div className={classes.foods}>
        {filteredFoods?.length !== 0 ? filteredFoods?.map((food) => (
          <Link to={`/food/${food._id}`} key={food._id} className={classes.food}>
            <div className={classes.imgContainer}>
              <img src={`http://localhost:5000/images/${food.image}`} alt="" className={classes.foodImg} />
            </div>
            <div className={classes.foodDetails}>
              <h4 className={classes.foodTitle}>
                {food?.title}
              </h4>
              <span className={classes.price}>
                <span>Ariary</span> {food?.price}
              </span>
            </div>
          </Link>
        )) : <h1 className={classes.noQuantity}>No {foodEnpoint} right now</h1>}
      </div>
   
    </div>
  </div>;
};

export default FoodCatalog;
