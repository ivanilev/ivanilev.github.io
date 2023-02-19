import React from "react";
import styles from "./Nav.module.css";
import logo from "../assets/logo151.png";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";
import { withNamespaces } from "react-i18next";
import LanguageMenu from "./LanguageMenu";

import {
  homeIcon,
  aboutUsIcon,
  languageIcon,
  contactUsIcon,
  // videosIcon,
} from "../assets/icons";

const Nav = (props) => {
  const { t } = props;
  const navRef = useRef();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 576);

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
        size={"2x"}
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

  const mobileMenuHeader = (
    <div className={styles.mobileMenuHeader}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h3>Achieving Excellence</h3>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.navAndLogo}>
        {isDesktop && <img className={styles.logo} src={logo} alt="logo" />}
        {!isDesktop ? <LanguageMenu /> : ""}
        <nav
          ref={navRef}
          className={
            props.showMenu ? `${styles.nav} ${styles.active}` : styles.nav
          }
        >
          {!isDesktop && closeIcon}
          {!isDesktop && mobileMenuHeader}

          <div className={styles.navItem}>
            {!isDesktop && homeIcon}
            <a onClick={iconClickHandler} href="#Home">
              {t("NavigationBarHome")}
            </a>
          </div>
          <div className={styles.navItem}>
            {!isDesktop && aboutUsIcon}
            <a onClick={iconClickHandler} href="#WhatWeDo">
              {t("NavigationBarAboutUs")}
            </a>
          </div>
          <div className={styles.navItem}>
            {!isDesktop && languageIcon}
            <a onClick={iconClickHandler} href="#Languages">
              {t("NavigationBarLanguages")}
            </a>
          </div>
          {/* <div className={styles.navItem}>
            {!isDesktop && videosIcon}
            <a onClick={iconClickHandler} href="#Videos">
              {t("NavigationBarVideos")}
            </a>
          </div> */}
          <div className={styles.navItem}>
            {!isDesktop && contactUsIcon}
            <a onClick={iconClickHandler} href="#GetInTouch">
              {t("NavigationBarContactUs")}
            </a>
          </div>
          {isDesktop ? <LanguageMenu /> : ""}
        </nav>
        {!isDesktop && navIcon}
      </div>
    </div>
  );
};

export default withNamespaces()(Nav);
