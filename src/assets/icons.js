import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHouse,
  faInfo,
  faLanguage,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faViber,
  faWhatsapp,
  faLinkedin,
  faYoutube,
  faInstagram,
  faSquareFacebook,
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
export const facebookIcon = (
  <FontAwesomeIcon className="social-icon" icon={faSquareFacebook} />
);
export const linkedInIcon = (
  <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
);
export const youtubeIcon = (
  <FontAwesomeIcon className="social-icon" icon={faYoutube} />
);
export const instaIcon = (
  <FontAwesomeIcon className="social-icon" icon={faInstagram} />
);
export const homeIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faHouse} />
);

export const aboutUsIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faInfo} />
);

export const languageIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faLanguage} />
);

export const contactUsIcon = (
  <FontAwesomeIcon className="menu-icon" icon={faPhoneVolume} />
);
