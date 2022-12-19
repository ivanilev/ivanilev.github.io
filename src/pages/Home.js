import React from "react";
import styles from "./Home.module.css";
import Nav from "../components/Nav";
import { withNamespaces } from "react-i18next";

const Home = (props) => {
  const { t } = props;
  return (
    <div id="Home" className={styles.container}>
      <Nav showMenu={props.showMenu} setShowMenu={props.setShowMenu} />
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>No language barriers</h1>
            <p>{t("HomePageParagraph")}</p>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Home);
