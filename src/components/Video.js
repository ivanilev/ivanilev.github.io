import React from "react";
import styles from "./Video.module.css";
export const Video = React.memo(function (props) {
  const { data, dataIndex, swipeTo } = props;
  const { embed_url } = data[dataIndex];
  return (
    <iframe
      className={styles.video}
      loading="lazy"
      title={embed_url}
      allowFullScreen={true}
      key={embed_url}
      src={embed_url}
    />
  );
});
