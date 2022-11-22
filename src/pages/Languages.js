import React from "react";
import styles from "./Languages.module.css";

const Languages = () => {
  return (
    <div id="languages" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>LANGUAGES,WHICH WE PROVIDE:</h1>
        <div className={styles.languages}>
          <div className={styles.english}></div>
          <div className={styles.deutch}></div>
          <div className={styles.spanish}></div>
          <div className={styles.french}></div>
          <div className={styles.greek}></div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
