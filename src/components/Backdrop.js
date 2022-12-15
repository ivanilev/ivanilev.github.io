import React from "react";
import ReactDOM from "react-dom";

import styles from "./Backdrop.module.css";

const BackdropOverlay = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop}></div>;
};

const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropOverlay onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default Backdrop;
