import React from "react";
import { useRef, useState } from "react";
import { withNamespaces } from "react-i18next";
import styles from "./GetInTouch.module.css";
import {
  phoneIcon,
  emailIcon,
  whatsAppIcon,
  viberIcon,
  facebookIcon,
  linkedInIcon,
  youtubeIcon,
  instaIcon,
} from "../assets/icons";
import Contacts from "../components/Contacts";
import emailjs from "@emailjs/browser";
import { t } from "i18next";

const GetInTouch = () => {
  const form = useRef();

  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailIsValid, setemailIsValid] = useState(true);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (name && email && subject && message) {

      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailjs
          .sendForm(
            "service_zlgf46j",
            "template_u96mfhp",
            form.current,
            "utwgE-B1odSR_eFg3"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        setSubmited(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setemailIsValid(false);
      }
    } else setError(t("GetInTouchErrorFillAllFields"));
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setError("");
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setemailIsValid(true);
  };
  const subjectChangeHandler = (e) => {
    setSubject(e.target.value);
    setError("");
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
    setError("");
  };

  let emailLabel = t('GetInTouchEmail');
  if (!email && error) {
    emailLabel = t('GetInTouchErrorEmailEmpty');
  } else if (!emailIsValid) {
    emailLabel = t('GetInTouchErrorEmailInvalid');
  }
  return (
    <div id="GetInTouch" className={styles.container}>
      <h1 className={styles.heading}>{t('GetInTouchHeader')}</h1>
      <div className={styles.content}>
        <div className={styles.directly}>
          <h1>{t('GetInTouchReachUsHeader')}</h1>
          <div className={styles.gridContainer}>
            <Contacts
              icon={phoneIcon}
              type={t('GetInTouchPhone')}
              contact="+359 886 346 633"
              href="tel:+359886346633"
            />
            <Contacts
              icon={emailIcon}
              type={t('GetInTouchEmail')}
              contact="business@nolangbarriers.com"
              href="mailto:business@nolangbarriers.com?Subject=Client%20Request"
            />
            <Contacts
              icon={whatsAppIcon}
              type="WhatsApp:"
              contact="+359 886 346 633"
              href="https://api.whatsapp.com/send?phone=+359886346633"
            />
            <Contacts
              icon={viberIcon}
              type="Viber:"
              contact="+359 886 346 633"
              href="viber://chat?number=359886346633"
            />
          </div>
          <div className={styles.social}>
            {facebookIcon}
            {linkedInIcon}
            {youtubeIcon}
            {instaIcon}
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.contactForm}>
          <h1>{t('GetInTouchFillForm')}</h1>
          <form ref={form} onSubmit={formSubmitHandler}>
            <div className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <label
                  style={!name && error ? { color: "#d9534f" } : {}}
                  htmlFor="user_name"
                >
                  {!name && error ? t('GetInTouchErrorNameEmpty') : t('GetInTouchName')}
                </label>
                <input
                  className={!name && error ? styles.invalidInput : ""}
                  onChange={nameChangeHandler}
                  placeholder={t('GetInTouchNameContent')}
                  name="user_name"
                  type="text"
                  value={name}
                />
              </div>
              <div className={styles.inputGroup}>
                <label
                  style={
                    !emailIsValid || (!email && error)
                      ? { color: "#d9534f" }
                      : {}
                  }
                  htmlFor="user_email"
                >
                  {emailLabel}
                </label>
                <input
                  className={
                    !emailIsValid || (!email && error)
                      ? styles.invalidInput
                      : ""
                  }
                  onChange={emailChangeHandler}
                  placeholder={t('GetInTouchEmailContent')}
                  name="user_email"
                  type="text"
                  value={email}
                />
              </div>
              <div className={styles.inputGroup}>
                <label
                  style={!subject && error ? { color: "#d9534f" } : {}}
                  htmlFor="subject"
                >
                  {!subject && error
                    ? t('GetInTouchErrorSubjectEmpty')
                    : t('GetInTouchSubject')}
                </label>
                <input
                  className={!subject && error ? styles.invalidInput : ""}
                  onChange={subjectChangeHandler}
                  placeholder={t('GetInTouchSubjectContent')}
                  name="subject"
                  type="text"
                  value={subject}
                />
              </div>
              <div className={styles.inputGroup}>
                <label
                  style={!message && error ? { color: "#d9534f" } : {}}
                  htmlFor="message"
                >
                  {!message && error
                    ? t('GetInTouchErrorMessageEmpty')
                    : t('GetInTouchMessage')}
                </label>
                <textarea
                  className={!message && error ? styles.invalidInput : ""}
                  onChange={messageChangeHandler}
                  placeholder={t('GetInTouchMessageContent')}
                  name="message"
                  value={message}
                />
              </div>
              {submited ? (
                <h1 className={styles.success}>{t('GetInTouchEmailSent')}</h1>
              ) : (
                ""
              )}
            </div>
            {!submited ? (
              <button className={styles.button} type="submit">
                {t('GetInTouchButton')}
              </button>
            ) : (
              <div style={{ display: "none" }}/>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(GetInTouch);
