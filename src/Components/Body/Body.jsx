import React from "react";
import styles from "./Body.module.css";
import image1 from "../Assets/Images/p1.jpg";

// ---------- //

function Body() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.card}>
          <a href="#">
            <img src={image1} alt="product" />
          </a>
          <div className={styles.cardBody}>
            <a href="#">
              <div>Nike Slim Shirt</div>
            </a>
            <div className={styles.rating}>
              <span>{/* <i className={}></i> */}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
