import React from "react";
import styles from "./Hero.module.css";
import headPhone from '../../assests/hero_headphones.png';
function Hero() {
  return (
    <div className={styles.hero}>
      <h1>100 Thousand Songs, ad-free</h1>
      <p>Over thousands podcast episodes</p>
      <img src={headPhone} alt="Headphones" />
    </div>
  );
}

export default Hero;
