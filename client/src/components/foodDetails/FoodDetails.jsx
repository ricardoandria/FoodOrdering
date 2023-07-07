import React, { useEffect, useState } from "react";
import classes from "./foodDetails.module.css";
import {useDispatch,useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { addProduct } from "../../redux/cartSlice";


const FoodDetails = () => {
  const [foodDetails,setFoodDetails] = useState("")
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()
  const {id} = useParams()
  const {token} = useSelector((state) => state.auth)
  const {products} = useSelector((state) => state.cart)

  console.log(products);

  useEffect(() => {
    const getFoodDetails = async() => {
      const res = await fetch(`http://localhost:5000/product/find/${id}`,{
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await res.json()
      setFoodDetails(data)
      console.log(data);
    }
    getFoodDetails()
  },[id])


  const changeQuantity = (command) => {
    if(command == "dec") {
      if(quantity == 1) return
      setQuantity(prev => prev - 1)
    } else if(command == "inc") {
      setQuantity(prev => prev +1)
    }
  }

  const addToCart = () => {
    dispatch(addProduct({...foodDetails,quantity}))
  }

  return <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <img src={`http://localhost:5000/images/${foodDetails?.image}`} alt="" />
      </div>
      <div className={classes.right}>
        <h2 className={classes.title}>{foodDetails?.title}</h2>
        <div className={classes.price}>
            Prix: <span>Ariary</span> {foodDetails?.price}
        </div>
        <div className={classes.quantity}>
          <button disabled={quantity === 1} onClick={() => changeQuantity("dec")}>-</button>
          <button className={classes.quantityNumber}>{quantity}</button>
          <button onClick={() => changeQuantity("inc")}>+</button>
        </div>
        <div className={classes.category}>
          <h3>Categorie: </h3>
          <span className={classes.categoryName}>{foodDetails?.category}</span>
        </div>
        <div className={classes.productDesc}>
          <div>Description: </div>
          <p>
            {foodDetails?.desc?.length > 40 ? `${foodDetails?.desc}`.slice(0,40) : foodDetails?.desc}
          </p>
        </div>
        <button onClick={addToCart} className={classes.addToCart}>Ajouter au panier <AiOutlineShoppingCart /> </button>
      </div>
    </div>
  </div>;
};

export default FoodDetails;
