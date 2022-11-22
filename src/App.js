import React, { useEffect, useState } from "react";
import "./App.css";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhatWeDo from "./pages/WhatWeDo";
import Languages from "./pages/Languages";
import Background from "./components/Background";

function App() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const scrollHandler = (ev) => {
      var homeDiv = document.getElementById("home");
      var distanceToTop = homeDiv.getBoundingClientRect().top;
      if (distanceToTop < 0) {
        setShowArrow(true);
      } else setShowArrow(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [showArrow]);
  const upIcon = (
    <a href="#home">
      <FontAwesomeIcon className="toTheTop" icon={faUpLong}></FontAwesomeIcon>
    </a>
  );

  return (
    <div className="App">
      {showArrow && upIcon}
      <Home />
      <WhatWeDo />
      <GetInTouch />
      <Languages />
    </div>
  );
}

export default App;
