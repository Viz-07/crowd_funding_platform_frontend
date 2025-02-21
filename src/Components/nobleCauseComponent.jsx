import React from "react";
import nobleCause from "./assets/nobleCause.jpg";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of noble cause</h1>
        <h1>Making a Difference Through FundRiser</h1>
        <p className={styles.para}>
        At FundRiser, we believe in the power of community to create meaningful change. When you donate through our platform, you're not just giving money – you're investing in dreams, supporting innovation, and helping people overcome challenges.
        Your Impact Matters
        </p>
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;