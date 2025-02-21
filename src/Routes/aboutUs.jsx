import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- Fundriser Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          At FundRiser, we believe in the power of community to create meaningful change. 
          Every donation, no matter the size, contributes to something bigger. Whether it's:
          <ol>
            <li>Supporting a student's education</li>
            <li>Funding critical medical treatments</li>
            <li>Helping entrepreneurs launch sustainable businesses</li>
            <li>Supporting disaster relief efforts</li>
          </ol>
          <br />
          <h3>Why Choose FundRiser?</h3>
          <br />
          <h4>Verified Campaigns:</h4> All fundraisers undergo thorough verification
          <h4>Regular Updates:</h4> Stay informed about how your donation is making a difference
          <h4>Community Support:</h4> Join a network of like-minded individuals passionate about creating positive change
          <h4>Secure Transactions:</h4> State-of-the-art security measures protect your donations
          <h4>Tax Benefits:</h4> Eligible donations may qualify for tax deductions
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vero consequatur ea quia inventore excepturi
          officiis deserunt sequi, esse nobis laudantium tempora aut, animi
          praesentium id! Necessitatibus laborum vitae vero at!
          <h3>Join Our Mission</h3>
          <br />
          Every day, countless individuals and organizations turn to FundRiser to bring their noble causes to life. 
          By joining our community of donors, you become part of a larger movement dedicated to making the world a better place.
          Your generosity has the power to transform lives. Start making a difference today by exploring
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;