import React from "react";
import { useState } from "react";
import i18n from "../i18n";
import { languages } from "../languages/languages";
import styles from "./LanguageMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const LanguageMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].image);
  const [dropDown, setDropDown] = useState(false);

  const downIcon = <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>;

  const languageChangeDropHandler = () => {
    setDropDown((prevState) => !prevState);
  };

  const languageChangeHandler = (e) => {
    i18n.changeLanguage(e.target.id);
    let language = document.getElementById(e.target.id);
    setSelectedLanguage(language.firstChild.src);
  };

  useEffect(() => {
    console.log(i18n.language);
  }, [selectedLanguage]);
  return (
    <div onClick={languageChangeDropHandler} className={styles.customSelect}>
      <div className={styles.currentlySelectedContainer}>
        <img
          className={styles.currentlySelected}
          src={selectedLanguage}
          alt=""
        />
        {downIcon}
      </div>

      <div
        style={dropDown ? { display: "block" } : {}}
        className={styles.dropDown}
      >
        {languages.map((elem, i) => {
          return (
            <div
              key={elem.languageKey}
              style={i === 0 ? { borderTop: "none" } : {}}
              onClick={languageChangeHandler}
              id={elem.languageKey}
              className={styles.dropDownItem}
            >
              <img
                className={styles.flagEmoji}
                id={elem.languageKey}
                src={elem.image}
                alt="flagEmoji"
              />
              <p id={elem.languageKey}>{elem.language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageMenu;
