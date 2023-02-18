import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHouse,
  faInfo,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faViber,
  faWhatsapp,
  faLinkedin,
  faYoutube,
  faInstagram,
  faDailymotion,
} from "@fortawesome/free-brands-svg-icons";
export const phoneIcon = (
  <FontAwesomeIcon className="contact-icon" icon={faPhone} />
);
export const emailIcon = (
  <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
);
export const whatsAppIcon = (
  <FontAwesomeIcon className="contact-icon" icon={faWhatsapp} />
);
export const viberIcon = (
  <FontAwesomeIcon className="contact-icon" icon={faViber} />
);
export const linkedInIcon = (
  <a href="https://www.linkedin.com/company/no-language-barriers/">
    <FontAwesomeIcon
      className="social-icon"
      icon={faLinkedin}
      style={{ cursor: "pointer" }}
    />
  </a>
);
export const youtubeIcon = (
  <a href="https://www.youtube.com/channel/UCrXf6eNIO-b4UlxFNspraBw/">
    <FontAwesomeIcon className="social-icon" icon={faYoutube} />
  </a>
);
export const instaIcon = (
  <a href="https://www.instagram.com/nolangbarriers/">
    <FontAwesomeIcon className="social-icon" icon={faInstagram} />
  </a>
);
export const dailymotionIcon = (
  <FontAwesomeIcon className="social-icon" icon={faDailymotion} />
);
export const homeIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faHouse} />
);

export const aboutUsIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faInfo} />
);

export const languageIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faGlobe} />
);

// export const videosIcon = (
//   <FontAwesomeIcon className="menu-icon" icon={faVideo} />
// );

export const contactUsIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faEnvelope} />
);
