import React from "react";
import styles from "./Languages.module.css";

import english from "../assets/UKFlag.jpg";
import deutch from "../assets/germanFlag.jpg";
import spanish from "../assets/spainFlag.png";
import french from "../assets/franceFlag.png";
import greek from "../assets/greeceFlag.png";
import bulgarian from "../assets/bulgarianFlag.jpg";


const Languages = () => {
  return (
    <div id="Languages" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>We specialize in</h1>
        <div className={styles.languages}>
          <div style={{backgroundImage: `url(${english})`}} className={styles.english} />
          <div style={{backgroundImage: `url(${deutch})`}} className={styles.deutch} />
          <div style={{backgroundImage: `url(${spanish})`}} className={styles.spanish} />
          <div style={{backgroundImage: `url(${french})`}} className={styles.french} />
          <div style={{backgroundImage: `url(${greek})`}} className={styles.greek} />
          <div style={{backgroundImage: `url(${bulgarian})`}} className={styles.bulgarian} />
        </div>
      </div>
    </div>
  );
};

export default Languages;
