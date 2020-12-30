import React, { useState } from "react";
import styles from "./Body.module.css";
import image1 from "../Assets/Images/p1.jpg";
import star from "../Assets/Icons/star.png";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// ---------- //

function Body() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.card}>
          <a href="#">
            <img src={image1} alt="product" className={styles.image} />
          </a>
          <div className={styles.cardBody}>
            <a href="#" className={styles.namelink}>
              <div className={styles.name}>Nike Slim Shirt</div>
            </a>
            <div className={styles.rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={styles.price}>$120</div>
          </div>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={image1} alt="product" className={styles.image} />
          </a>
          <div className={styles.cardBody}>
            <a href="#" className={styles.namelink}>
              <div className={styles.name}>Nike Slim Shirt</div>
            </a>
            <div className={styles.rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={styles.price}>$120</div>
          </div>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={image1} alt="product" className={styles.image} />
          </a>
          <div className={styles.cardBody}>
            <a href="#" className={styles.namelink}>
              <div className={styles.name}>Nike Slim Shirt</div>
            </a>
            <div className={styles.rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={styles.price}>$120</div>
          </div>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={image1} alt="product" className={styles.image} />
          </a>
          <div className={styles.cardBody}>
            <a href="#" className={styles.namelink}>
              <div className={styles.name}>Nike Slim Shirt</div>
            </a>
            <div className={styles.rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={styles.price}>$120</div>
          </div>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={image1} alt="product" className={styles.image} />
          </a>
          <div className={styles.cardBody}>
            <a href="#" className={styles.namelink}>
              <div className={styles.name}>Nike Slim Shirt</div>
            </a>
            <div className={styles.rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={styles.price}>$120</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
