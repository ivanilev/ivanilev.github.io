import React from "react";
import styles from "./Languages.module.css";

import english from "../assets/united-kingdom.svg";
import deutch from "../assets/germany.svg";
import spanish from "../assets/spain.svg";
import portuguese from "../assets/portugal.svg";
import greek from "../assets/greece.svg";
import bulgarian from "../assets/bulgaria.png";


const Languages = () => {
  return (
    <div id="Languages" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>We specialize in:</h1>
        <div className={styles.languages}>
          <div style={{backgroundImage: `url(${english})`}} className={styles.english} />
          <div style={{backgroundImage: `url(${deutch})`}} className={styles.deutch} />
          <div style={{backgroundImage: `url(${spanish})`}} className={styles.spanish} />
          <div style={{backgroundImage: `url(${portuguese})`}} className={styles.portuguese} />
          <div style={{backgroundImage: `url(${greek})`}} className={styles.greek} />
          <div style={{backgroundImage: `url(${bulgarian})`}} className={styles.bulgarian} />
        </div>
      </div>
    </div>
  );
};

export default Languages;
