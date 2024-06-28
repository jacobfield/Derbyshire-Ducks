import React from "react";
import { useState, useEffect, useRef } from "react";

const MovingBar: React.FC = () => {
  const initialHashtags = [
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
  ];

  // Duplicate the hashtags array for continuous looping
  const [hashtags, setHashtags] = useState([
    ...initialHashtags,
    ...initialHashtags,
  ]);
  const [position, setPosition] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const moveText = () => {
      setPosition((prevPosition) => {
        // Assuming textRef.current.offsetWidth is the width of the entire duplicated content
        if (textRef.current) {
          const halfWidth = textRef.current.offsetWidth / 2;
          // Reset position for a seamless loop when half of the content has scrolled past
          if (prevPosition < -halfWidth) {
            return 0; // Reset to start position for seamless looping
          } else {
            return prevPosition - 3; // Continue moving text to the left
          }
        } else {
          return prevPosition; // No change if textRef is not available
        }
      });
    };
    const interval = setInterval(moveText, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePositionBasedOnTextWidth = () => {
      if (textRef.current) {
        // Initially set position to ensure text starts off-screen to the right
        setPosition(window.innerWidth);
      }
    };

    window.addEventListener("resize", updatePositionBasedOnTextWidth);
    // Immediate call to set initial position
    updatePositionBasedOnTextWidth();

    return () =>
      window.removeEventListener("resize", updatePositionBasedOnTextWidth);
  }, []);

  const renderHashtags = () => {
    // Ensure sufficient whitespace for visual separation
    return hashtags.join(" \u00A0\u00A0 ");
  };

  return (
    <div
      className="movingBar"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <p
        ref={textRef}
        className="movingText"
        style={{ position: "absolute", left: position }}
      >
        {renderHashtags()}
      </p>
    </div>
  );
};

export default MovingBar;
