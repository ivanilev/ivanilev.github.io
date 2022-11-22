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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nulla laboriosam veritatis vitae assumenda nemo optio inventore
              dolore tenetur sunt.
            </p>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
