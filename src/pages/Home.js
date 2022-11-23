import React from "react";
import styles from "./Home.module.css";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div id="home" className={styles.container}>
      <Nav />
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>No language barriers</h1>
            <p>
            No language barriers is here to help your business expand by translating your content into several different languages! We will help you dive right into a new market with hundreds of millions of new customers.
            </p>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
