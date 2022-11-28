import React from "react";
import styles from "./Languages.module.css";

const Languages = () => {
  return (
    <div id="Languages" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>LANGUAGES, WHICH WE PROVIDE:</h1>
        <div className={styles.languages}>
          <div className={styles.english} />
          <div className={styles.deutch} />
          <div className={styles.spanish} />
          <div className={styles.french} />
          <div className={styles.greek} />
          <div className={styles.bulgarian} />
        </div>
      </div>
    </div>
  );
};

export default Languages;
