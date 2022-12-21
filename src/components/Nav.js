import React from "react";
import styles from "./Nav.module.css";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo151.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";
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
  const [selectedLanguage, setSelectedLanguage] = useState("BG");
  const [dropDown, setDropDown] = useState(false);

  const languageChangeDropHandler = () => {
    setDropDown((prevState) => !prevState);
  };

  const languageChangeHandler = (e) => {
    i18n.changeLanguage(e.target.id);
    let language = document.querySelector("#" + e.target.id);
    setSelectedLanguage(language.firstChild.innerHTML);
  };

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
          <div className={styles.navItem}>
            {!isDesktop && contactUsIcon}
            <a onClick={iconClickHandler} href="#GetInTouch">
              {t("NavigationBarContactUs")}
            </a>
          </div>
          <div
            onClick={languageChangeDropHandler}
            className={styles.customSelect}
          >
            <span className={styles.currentlySelected}>{selectedLanguage}</span>
            <div
              style={dropDown ? { display: "block" } : {}}
              className={styles.dropDown}
            >
              <div
                onClick={languageChangeHandler}
                id="bg"
                className={styles.dropDownItem}
              >
                <span id="bg">BG</span>
                <p id="bg">Bulgarian</p>
              </div>
              <div
                onClick={languageChangeHandler}
                id="en"
                className={styles.dropDownItem}
              >
                <span id="en">EN</span>
                <p id="en">English</p>
              </div>
            </div>
          </div>
        </nav>
        {!isDesktop && navIcon}
      </div>
    </div>
  );
};

export default withNamespaces()(Nav);
