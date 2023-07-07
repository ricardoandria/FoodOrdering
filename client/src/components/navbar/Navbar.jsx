import React, { useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.cart)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className={classes.title}>
            <img src={logo} alt="" className={classes.logo} />
            Isakafo
          </Link>
        </div>
        <div className={classes.center}>
          <div className={classes.list}>
            <li className={classes.listItems}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItems}>
              <a href="#contacts">Contact</a>
            </li>{" "}
            <li className={classes.listItems}>
              <a href="#foods">Foods</a>
            </li>{" "}
            <li className={classes.listItems}>
              <a href="#faq">FAQ</a>
            </li>{" "}
            <li className={classes.listItems}>
              <a href="/create">Create</a>
            </li>
          </div>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to="/cart" className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button onClick={handleLogout} className={classes.logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
