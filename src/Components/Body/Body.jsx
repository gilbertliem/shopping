import React from "react";
import styles from "./Body.module.css";

// ---------- //

function Body() {
  return (
    <>
      <div className={styles.body}>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </div>
    </>
  );
}

export default Body;
