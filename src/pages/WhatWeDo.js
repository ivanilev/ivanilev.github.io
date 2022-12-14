import React from "react";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <div id="WhatWeDo" className={styles.container}>
      <div className={styles.frame}>
        <h1>What we do?</h1>
        <p className={styles.paragraph}>
          No Language Barriers puts an emphasis on high quality. In order to
          guarantee that, we forward all queries to two team members, who are
          native speakers of the target language requested by the client.
        </p>
        <p className={styles.paragraph}>
          The first one would translate the content and the second one would do
          a peer-review before sending it back to the first translator. Finally,
          the two linguists will sit down, discuss and resolve all differences
          before delivering the final product back to the client.
        </p>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default WhatWeDo;
