import React from "react";
import styles from "./WhatWeDo.module.css";
import { withNamespaces } from "react-i18next";

const WhatWeDo = (props) => {
  const { t } = props;
  return (
    <div id="WhatWeDo" className={styles.container}>
      <div className={styles.frame}>
        <h1>{t('WhatWeDoHeader')}</h1>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default withNamespaces()(WhatWeDo);
