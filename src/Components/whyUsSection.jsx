import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
            Join FundRiser in making a real difference. When you donate through our platform, every rupee goes directly to verified causes that matter. 
            We carefully screen each campaign to ensure your generosity reaches those truly in need - whether it's supporting a child's education, 
            funding life-saving medical treatments, or helping communities recover from disasters.
          </p>
          <p className={styles.para}>
            What sets us apart is our commitment to complete transparency. You'll receive regular updates about how your donation is creating impact, 
            along with detailed reports on fund utilization. With secure transactions and minimal platform fees, 
            you can be confident that your contribution is making the maximum possible difference.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;