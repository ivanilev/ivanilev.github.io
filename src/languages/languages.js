import bgFlagEmoji from "../assets/bg-flag-emoji.png";
import enFlagEmoji from "../assets/en-flag-emoji.png";
import deFlagEmoji from "../assets/de-flag-emoji.png";
import ptFlagEmoji from "../assets/pt-flag-emoji.png";
import ruFlagEmoji from "../assets/ru-flag-emoji.png";
import esFlagEmoji from "../assets/es-flag-emoji.png";
import enGroupImage from "../assets/Group 249.png";
import bgGroupImage from "../assets/Group BG.png";
import esGroupImage from "../assets/Group ES.png";
import ptGroupImage from "../assets/Group PT.png";
import ruGroupImage from "../assets/Group RU.png";

export const languages = [
  {
    language: "English",
    languageKey: "en",
    image: enFlagEmoji,
    groupImage: enGroupImage,
  },
  {
    language: "Български",
    languageKey: "bg",
    image: bgFlagEmoji,
    groupImage: bgGroupImage,
  },
  { language: "Deutsch", languageKey: "de", image: deFlagEmoji },
  {
    language: "Português",
    languageKey: "pt",
    image: ptFlagEmoji,
    groupImage: ptGroupImage,
  },
  {
    language: "Русский",
    languageKey: "ru",
    image: ruFlagEmoji,
    groupImage: ruGroupImage,
  },
  {
    language: "Español",
    languageKey: "es",
    image: esFlagEmoji,
    groupImage: esGroupImage,
  },
];
