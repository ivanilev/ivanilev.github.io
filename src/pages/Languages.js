import React from "react";
import styles from "./Languages.module.css";

import { withNamespaces } from "react-i18next";

import english from "../assets/united-kingdom.svg";
import german from "../assets/germany.svg";
import spanish from "../assets/spain.svg";
import portuguese from "../assets/portugal.svg";
import greek from "../assets/greece.svg";
import bulgarian from "../assets/bulgaria.png";


const Languages = (props) => {
  const { t } = props; 
  return (
    <div id="Languages" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t('LanguagesHeader')}</h1>
        <div className={styles.languages}>
          <div style={{backgroundImage: `url(${english})`}}>
            <span>{t('LanguagesEnglish')}</span>
          </div>
          <div style={{backgroundImage: `url(${german})`}}>
            <span>{t('LanguagesGerman')}</span>
          </div>
          <div style={{backgroundImage: `url(${spanish})`}}>
            <span>{t('LanguagesSpanish')}</span>
          </div>
          <div style={{backgroundImage: `url(${portuguese})`}}>
            <span>{t('LanguagesPortuguese')}</span>
          </div>
          <div style={{backgroundImage: `url(${greek})`}}>
            <span>{t('LanguagesGreek')}</span>
          </div>
          <div style={{backgroundImage: `url(${bulgarian})`}}>
            <span>{t('LanguagesBulgarian')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Languages);
