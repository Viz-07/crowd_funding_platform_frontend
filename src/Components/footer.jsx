import React from "react";
// import { Link } from "react-router-dom";
import logo from "./assets/FundriserIcon.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <a href="/">
            <img className={`${styles.logo}`} src={logo} alt="FUNDRISER LOGO" />
          </a>
          <br />
          <p className={`${styles.caption}`}>
            FundRiser
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="/about-us">
              About
            </a>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
            <a
              className={`${styles.link}`}
              href="https://github.com/Viz-07"
              target="_blank"
              rel="noreferrer"
            >
              Github-link
            </a>
          </div>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}>
            <span style={{ fontWeight: "bolder" }}>Developed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/vsn-nambiar-41944831b/"
              target="_blank"
              rel="noreferrer"
            >
              VizUalizah
            </a>
          </p>
          <p>
            For any queries, reach out at email
            <br />
            <b>bollocksabsolute885@gmail.com</b>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center" }}>
          Copyright &copy; 2025 FundRiser Crowd Funding Platfrom
        </p>
      </div>
    </footer>
  );
};

export default Footer;