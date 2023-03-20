import React from "react";
import { withNamespaces } from "react-i18next";
import styles from "./Videos.module.css";
import { useState, useEffect, useRef } from "react";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import { Video } from "../components/Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Videos = (props) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const { t } = props;
  const [urlListDM, setUrlListDM] = useState([]);
  const [urlListYT, setUrlListYT] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const responseDM = await fetch(
          "https://api.dailymotion.com/videos?fields=embed_url&limit=100&user=NoLanguageBarriers"
        );
        const responseYT = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCrXf6eNIO-b4UlxFNspraBw&part=snippet,id&order=date&maxResults=20`
        )
        const dataDM = await responseDM.json();
        const dataYT = await responseYT.json();
        const idList = dataYT.items.map((elem) => {
          return {
            embed_url: `https://www.youtube.com/embed/${elem.id.videoId}`,
          };
        });
        idList.pop(); 
        setUrlListYT(idList);
        setUrlListDM(dataDM.list);
      } catch (e) {
        alert(e);
      }
    };

    getVideos();
  }, []);
  const combinedVideosList = urlListYT.concat(urlListDM);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div id="Videos" className={styles.container}>
      <h1 className="heading ourWork">{t("VideosHeader")}</h1>
      <div className={styles.videosContainer}>
        {combinedVideosList.length > 0 && (
          <div
            style={{
              width: "90%",
              position: "relative",
            }}
          >
            <ResponsiveContainer
              carouselRef={ref}
              render={(width, carouselRef) => {
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    slideWidth={isDesktop ? 420 : 200}
                    fadeDistance={0.2}
                    slideComponent={Video}
                    carouselWidth={width}
                    data={combinedVideosList}
                    maxVisibleSlide={3}
                    transitionTime={450}
                  />
                );
              }}
            />
            <button
              className={`${styles.button} ${styles.left}`}
              onClick={() => ref.current?.goBack()}
            >
              <FontAwesomeIcon className={styles.buttonIcon} icon={faCaretLeft} size={"6x"} />
            </button>
            <button
              className={`${styles.button} ${styles.right}`}
              onClick={() => ref.current?.goNext()}
            >
              <FontAwesomeIcon className={styles.buttonIcon} icon={faCaretRight} size={"6x"} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withNamespaces()(Videos);
