import React from "react";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <div id="WhatWeDo" className={styles.container}>
      <div className={styles.frame}>
        <h1>What we do?</h1>
        <p className={styles.paragraph}>
          No Language Barriers puts an emphasis on high quality. In order to
          guarantee such we have one translator, usually a native speaker of the
          target language, to translate the content, and then another one to do
          a proofreading of his or her work. The two linguists then discuss and
          fix all differences in translation before delivering the final product
          to the client.
        </p>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default WhatWeDo;
