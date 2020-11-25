import React from "react";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <div>Shopping</div>
        <div>
          <div>Cart</div>
          <div>Sign In</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
