import React from "react";
import styles from "./Home.module.css";
import Nav from "../components/Nav";
import { useStateContext } from "../store/StateContext";
const Home = (props) => {
  const ctx = useStateContext();

  let title = "";
  let paragraph = "";

  switch (ctx.language) {
    case "English":
      title = "No language barriers";
      paragraph =
        "No language barriers is here to help your business expand bytranslating your content into several different languages! We will help you dive right into a new market with hundreds of millions ofnew customers.";
      break;
    case "Other":
      title = "Lorem ipsum dolor";
      paragraph =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt at laborum. Minus facilis debitis voluptate sapiente commodi fugiat ad deserunt in, eligendi rerum maiores error, adipisci vel nisi odit quisquam ut.";
      break;
  }

  return (
    <div id="home" className={styles.container}>
      <Nav showMenu={props.showMenu} setShowMenu={props.setShowMenu} />
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
