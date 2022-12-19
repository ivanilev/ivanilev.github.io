import React from "react";
import styles from "./Nav.module.css";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo151.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";
import { withNamespaces } from 'react-i18next';
import {
  homeIcon,
  aboutUsIcon,
  languageIcon,
  contactUsIcon,
} from "../assets/icons";
const Nav = (props) => {
  const { t } = props;
  const navRef = useRef();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const closeIcon = (
    <FontAwesomeIcon
      className={styles.closeIcon}
      icon={faClose}
      onClick={iconClickHandler}
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

  const updateMedia = () => {
    setDesktop(window.innerWidth > 576);
  };

  function iconClickHandler() {
    props.setShowMenu((prevState) => !prevState);
  }
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
          {!isDesktop && closeIcon}
          <div>
            {!isDesktop && homeIcon}
            <a onClick={iconClickHandler} href="#Home">
              {t('NavigationBarHome')}
            </a>
          </div>
          <div>
            {!isDesktop && aboutUsIcon}
            <a onClick={iconClickHandler} href="#WhatWeDo">
              {t('NavigationBarAboutUs')}
            </a>
          </div>
          <div>
            {!isDesktop && languageIcon}
            <a onClick={iconClickHandler} href="#Languages">
              {t('NavigationBarLanguages')}
            </a>
          </div>
          <div>
            {!isDesktop && contactUsIcon}
            <a onClick={iconClickHandler} href="#GetInTouch">
              {t('NavigationBarContactUs')}
            </a>
          </div>
        </nav>
        {!isDesktop && navIcon}
      </div>
    </div>
  );
};

export default withNamespaces()(Nav);
