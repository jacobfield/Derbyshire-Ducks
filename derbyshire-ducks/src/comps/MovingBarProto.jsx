import React from "react";
import { useState, useEffect, useRef } from "react";
const MovingBar = () => {
  const [hashtags, setHashtags] = useState([
    "#DerbyshireDucks",
    "#JoinTheFlock",
    "#QuackQuack",
    "#FlagFootball",
    "#BAFA",
    "#QuackAttack",
    "#DuckSquad",
    "#VFormation",
    "#FlagIsSwag",
    "#Takeoff",
  ]);
  const [position, setPosition] = useState(window.innerWidth);
  const textRef = useRef < HTMLParagraphElement > null;

  useEffect(() => {
    const moveText = () => {
      // update position to move left.
      setPosition((prevPosition) => prevPosition - 1);
    };
    const interval = setInterval(moveText, 20); // can adjust for smoother animation

    if (position < -2104) {
      setPosition(window.innerWidth);
    }
    return () => clearInterval(interval); //cleanup on comp unmount
  }, [position]);

  useEffect(() => {
    const updatePositionBasedOnTextWidth = () => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth; //measure text width
        console.log(`text width: ${textWidth}px`);

        if (position < -textWidth) {
          setPosition(window.innerWidth);
        }
      }
    };
    window.addEventListener(`resize`, updatePositionBasedOnTextWidth);
    updatePositionBasedOnTextWidth();
    return () =>
      window.removeEventListener(`resize`, updatePositionBasedOnTextWidth);
  }, [position]);

  return (
    <div className="movingBar">
      <p
        ref={textRef}
        className="movingText"
        style={{ transform: `translateX(${position}px` }}
      >
        {`#DerbyshireDucks\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#JoinTheFlock\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#QuackQuack\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#FlagFootball\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#BAFA
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#QuackAttack\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#DuckSquad\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#FlyingVFormation\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#FlagIsSwag\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0#Takeoff`}
      </p>
    </div>
  );
};

export default MovingBar;
