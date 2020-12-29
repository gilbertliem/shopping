import React from "react";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <a href="" className={style.brand}>
          Shopping
        </a>
        <div>
          <a href="#" className={style.option}>
            Cart
          </a>
          <a href="#" className={style.option}>
            Sign In
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
