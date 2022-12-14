import React from "react";
import { useRef, useState } from "react";
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
    } else setError("Please fill all fields.");
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

  return (
    <div id="GetInTouch" className={styles.container}>
      <h1 className={styles.heading}>Get in touch!</h1>
      <div className={styles.content}>
        <div className={styles.directly}>
          <h1>Reach us directly by:</h1>
          <div className={styles.gridContainer}>
            <Contacts
              icon={phoneIcon}
              type="Phone:"
              contact="+359 887 320 313"
              href="tel:+359887320313"
            />
            <Contacts
              icon={emailIcon}
              type="Email:"
              contact="management@nolangbarriers.com"
              href="mailto:management@nolangbarriers.com?Subject=No%20Language%20Barriers"
            />
            <Contacts
              icon={whatsAppIcon}
              type="WhatsApp:"
              contact="+359 887 320 313"
              href="https://api.whatsapp.com/send?phone=+359887320313"
            />
            <Contacts
              icon={viberIcon}
              type="Viber:"
              contact="+359 887 320 313"
              href="viber://chat?number=359887320313"
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
          <h1>Or fill in our contact form:</h1>
          <form ref={form} onSubmit={formSubmitHandler}>
            <div className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <label
                  style={!name && error ? { color: "#d9534f" } : {}}
                  htmlFor="user_name"
                >
                  {!name && error ? "Please fill the name field:" : "Name:"}
                </label>
                <input
                  className={!name && error ? styles.invalidInput : ""}
                  onChange={nameChangeHandler}
                  placeholder="Enter your name here..."
                  name="user_name"
                  type="text"
                  value={name}
                />
              </div>
              <div className={styles.inputGroup}>
                <label
                  style={!emailIsValid ? { color: "#d9534f" } : {}}
                  htmlFor="user_email"
                >
                  {!emailIsValid ? "Please enter a valid email:" : "Email:"}
                </label>
                <input
                  className={!emailIsValid ? styles.invalidInput : ""}
                  onChange={emailChangeHandler}
                  placeholder="Enter your email address here..."
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
                    ? "Please fill the subject field:"
                    : "Subject:"}
                </label>
                <input
                  className={!subject && error ? styles.invalidInput : ""}
                  onChange={subjectChangeHandler}
                  placeholder="Type your subject here..."
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
                  {!subject && error
                    ? "Please fill the message field:"
                    : "Message:"}
                </label>
                <textarea
                  className={!message && error ? styles.invalidInput : ""}
                  onChange={messageChangeHandler}
                  placeholder="Type your message here..."
                  name="message"
                  value={message}
                />
              </div>
              {submited ? (
                <h1 className={styles.success}>Thank you for contacting us!</h1>
              ) : (
                ""
              )}
            </div>
            <button
              style={submited ? { opacity: "0" } : {}}
              className={styles.button}
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
