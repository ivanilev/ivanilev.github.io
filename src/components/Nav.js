import React from "react";
import styles from "./Nav.module.css";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo151.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
const Nav = (props) => {
  const navRef = useRef();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const navIcon = (
    <div className={styles.navAndLogoMobile}>
      <img src={logo} alt="logo" className={styles.logo} />
      <FontAwesomeIcon className={styles.icon} icon={faNavicon} />
    </div>
  );

  const updateMedia = () => {
    setDesktop(window.innerWidth > 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navAndLogo}>
        {isDesktop && <img className={styles.logo} src={logo} alt="logo" />}
        <nav
          ref={navRef}
          className={
            props.showMenu ? `${styles.nav} ${styles.active}` : styles.nav
          }
        >
          <a href="#home">Home</a>
          <a href="#whatWeDo">About us</a>
          <a href="#Languages">Languages</a>
          <a href="#GetInTouch">Contact us</a>
        </nav>
        {!isDesktop && navIcon}
      </div>
    </div>
  );
};

export default Nav;
