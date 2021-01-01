import React, { useState } from "react";
import styles from "./Body.module.css";
import Rating from "@material-ui/lab/Rating";
import data from "../../data";
// import image1 from "../Assets/Images/p1.jpg";
// import star from "../Assets/Icons/star.png";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// ---------- //

function Body() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className={styles.body}>
        {data.products.map((product) => {
          console.log(product.image);
          return (
            <div className={styles.card} key={product.id}>
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.image}
                  className={styles.image}
                />
              </a>
              <div className={styles.cardBody}>
                <a href={`/product/${product.id}`} className={styles.namelink}>
                  <div className={styles.name}>{product.name}</div>
                </a>
                <div className={styles.rating}>
                  <Rating
                    name="simple-controlled"
                    value={product.rating}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <div className={styles.price}>${product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Body;
