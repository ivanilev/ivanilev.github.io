import React, { useEffect, useState } from "react";
import "./App.css";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import { faUpLong, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhatWeDo from "./pages/WhatWeDo";
import Languages from "./pages/Languages";
import Backdrop from "./components/Backdrop";
import Videos from "./pages/Videos";

function App() {
  const [showArrow, setShowArrow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  //start of code

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        setShowMenu(false);
        /* right swipe */
      } else {
        setShowMenu(true);
        /* left swipe */
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  //end of code
  useEffect(() => {
    const scrollHandler = (ev) => {
      let homeDiv = document.getElementById("Home");
      let distanceToTop = homeDiv.getBoundingClientRect().top;
      if (distanceToTop < 0) {
        setShowArrow(true);
      } else setShowArrow(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [showArrow, showMenu]);
  const upIcon = (
    <a href="#Home">
      <FontAwesomeIcon className="toTheTop" icon={faUpLong}></FontAwesomeIcon>
    </a>
  );
  const downIcon = (
    <a href="#WhatWeDo">
      <FontAwesomeIcon
        className="downArrow"
        icon={faCaretDown}
        size={"6x"}
      ></FontAwesomeIcon>
    </a>
  );

  const backDropClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="App">
      {showMenu ? <Backdrop onClick={backDropClickHandler} /> : ""}
      {showArrow && upIcon}
      <Home showMenu={showMenu} setShowMenu={setShowMenu} />
      {!showArrow && downIcon}
      <WhatWeDo />
      <Languages />
      <Videos />
      <GetInTouch />
    </div>
  );
}

export default App;
