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
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value &&
      emailRef.current.value &&
      subjectRef.current.value &&
      messageRef.current.value
    ) {
      if (emailRef.current.value.includes("@")) {
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
      } else {
        setError("Email is not valid.");
      }
    } else setError("Please fill all fields.");
  };

  return (
    <div id="getInTouch" className={styles.container}>
      <h1 className={styles.heading}>Get in touch!</h1>
      <div className={styles.content}>
        <div className={styles.directly}>
          <p>Reach us directly by:</p>
          <div className={styles.gridContainer}>
            <Contacts
              icon={phoneIcon}
              type="Phone:"
              contact="+359 887 320 313"
            />
            <Contacts
              icon={emailIcon}
              type="Email:"
              contact="ivanilev@nolanguagebarriers.com"
            />
            <Contacts
              icon={whatsAppIcon}
              type="Whatsapp:"
              contact="+359 887 320 313"
            />
            <Contacts
              icon={viberIcon}
              type="Viber:"
              contact="+359 887 320 313"
            />
          </div>
          <div className={styles.social}>
            <div className={styles.socialIcon}>{facebookIcon}</div>
            <div className={styles.socialIcon}>{linkedInIcon}</div>
            <div className={styles.socialIcon}>{youtubeIcon}</div>
            <div className={styles.socialIcon}>{instaIcon}</div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.contactForm}>
          <p>Or fill in our contact form</p>
          {error === "Email is not valid." ? (
            <p className={styles.errorMessage}>{error}</p>
          ) : (
            ""
          )}
          {error === "Please fill all fields." ? (
            <p className={styles.errorMessage}>{error}</p>
          ) : (
            ""
          )}
          <form ref={form} onSubmit={formSubmitHandler}>
            <div className={styles.inputGroup}>
              <label htmlFor="user_name">Name:</label>
              <input
                onChange={() => setError("")}
                ref={nameRef}
                placeholder="Enter your name here"
                name="user_name"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="user_email">Email:</label>
              <input
                onChange={() => setError("")}
                ref={emailRef}
                placeholder="Enter your email adress here"
                name="user_email"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject:</label>
              <input
                onChange={() => setError("")}
                ref={subjectRef}
                placeholder="Type your subject here"
                name="subject"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                onChange={() => setError("")}
                ref={messageRef}
                placeholder="Type your message here"
                name="message"
              />
            </div>
            {submited ? (
              <p style={{ color: "rgb(38, 127, 193)" }}>
                Thank you for contacting us!
              </p>
            ) : (
              ""
            )}
            <button disabled={submited} className={styles.button} type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
