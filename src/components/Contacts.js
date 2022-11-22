import React from "react";
import styles from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles.details}>
        <p>{props.type}</p>
        <span>{props.contact}</span>
      </div>
    </div>
  );
};

export default Contacts;
