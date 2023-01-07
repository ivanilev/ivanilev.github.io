import React from "react";
import styles from "./WhatWeDo.module.css";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";
import { languages } from "../languages/languages";

const WhatWeDo = (props) => {
  const { t } = props;
  const { groupImage } = languages.find(
    (elem) => elem.languageKey === i18n.language
  );
  return (
    <div id="WhatWeDo" className={styles.container}>
      <div className={styles.frame}>
        <h1>{t("WhatWeDoHeader")}</h1>

        <img className={styles.image} src={groupImage} alt="" />
      </div>
    </div>
  );
};

export default withNamespaces()(WhatWeDo);
