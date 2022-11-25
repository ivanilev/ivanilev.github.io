import React from "react";
import styles from "./Nav.module.css";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo151.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const navRef = useRef();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const closeIcon = (
    <FontAwesomeIcon
      className={styles.closeIcon}
      onClick={iconClickHandler}
      icon={faClose}
    />
  );
  const navIcon = (
    <div className={styles.navAndLogoMobile}>
      <img src={logo} alt="logo" className={styles.logo} />
      <FontAwesomeIcon
        onClick={iconClickHandler}
        className={styles.icon}
        icon={faNavicon}
      />
    </div>
  );

  function iconClickHandler() {
    navRef.current?.classList.toggle(styles.active);
  }
  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navAndLogo}>
        {isDesktop && <img className={styles.logo} src={logo} alt="logo" />}
        <nav ref={navRef} className={styles.nav}>
          <a onClick={iconClickHandler} href="#home">
            Home
          </a>
          <a onClick={iconClickHandler} href="#AboutUs">
            About us
          </a>
          <a onClick={iconClickHandler} href="#Languages">
            Languages
          </a>
          <a onClick={iconClickHandler} href="#GetInTouch">
            Contact us
          </a>
          {!isDesktop && closeIcon}
        </nav>
        {!isDesktop && navIcon}
      </div>
    </div>
  );
};

export default Nav;
