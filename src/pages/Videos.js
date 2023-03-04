import React from "react";
import { withNamespaces } from "react-i18next";
import styles from "./Videos.module.css";
import { useState, useEffect } from "react";

const YOUTUBE_CHANNEL_API = "https://www.googleapis.com/youtube/v3/channelSections"

const Videos = (props) => {
  const { t } = props;
  const [urlListDM, setUrlListDM] = useState([]);
  const [urlListYT, setUrlListYT] = useState([]);

  const getVideosDailyMotion = async () => {
    try {
      const response = await fetch(
        "https://api.dailymotion.com/videos?fields=embed_url&limit=100&user=NoLanguageBarriers"
      );
      const data = await response.json();
      setUrlListDM(data.list);
    } catch (e) {
      alert(e);
    }
  };

  const getVideosYouTube = async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_CHANNEL_API}?part=snippet,contentDetails&channelId=UCrXf6eNIO-b4UlxFNspraBw&key=${process.env.REACT_APP_YOTUBE_API_KEY}`
      );
      const data = await response.json();
      setUrlListYT(data);
      console.log(data);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getVideosDailyMotion();
    getVideosYouTube();
  }, []);

  return (
    <div id="Videos" className={styles.container}>
      <h1 className="heading">{t("VideosHeader")}</h1>
      <div className={styles.videosContainer}>
        {urlListDM.map((elem, i) => {
          let videoListStyleObject = {};

          if (
            (urlListDM.length - 1 === i && urlListDM.length % 3 !== 0) ||
            urlListDM.length === 1
          ) {
            videoListStyleObject = {
              gridColumnStart: "2",
            };
          }

          return (
            <iframe
              style={videoListStyleObject}
              loading="lazy"
              title={elem.embed_url}
              allowFullScreen={true}
              className={styles.video}
              key={elem.embed_url}
              src={elem.embed_url}
            ></iframe>
          );
        })}
      </div>
    </div>
  );
};

export default withNamespaces()(Videos);
