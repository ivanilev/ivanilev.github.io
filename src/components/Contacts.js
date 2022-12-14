import React from "react";
import styles from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <div className={styles.container}>
      <a href={props.href} className={styles.icon}>
        {props.icon}
      </a>
      <div className={styles.details}>
        <h5>{props.type}</h5>
        <span>{props.contact}</span>
      </div>
    </div>
  );
};

export default Contacts;
