import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
import shopify from "../images/shopify.png";
function Navbar() {
  const items = useSelector((state) => state.cart.cart);
  console.log();
  return (
    <>
      <div>
        <nav className="navbar ">
          <div className="container-fluid  v-container-main123 ">
            
              <img
                src={
                  "https://freelogopng.com/images/all_img/1655830761shopify-logo-png.png"
                }
                alt="logo"
                style={{ width: "15%"  ,  maxWidth: "25%"}}
              />
           
            <div className="d-flex justify-content-evenly linkContainer"  style={{ maxWidth: "65%" }} >
              <NavLink to={"/"} className=" me-2">
                <i className="fa fa-home" style={{size:"25px"}}></i>
              </NavLink>
              <NavLink to={"/cart"} className="">  <i className="fa fa-shopping-cart" style={{size:"18px"}}></i>  : {items.length}
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
