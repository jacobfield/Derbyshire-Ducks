import React, { useState, useEffect, useRef } from "react";

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

  const [hashtags, setHashtags] = useState([
    ...Array(1000).fill(initialHashtags).flat(),
  ]);
  const [position, setPosition] = useState(window.innerWidth);
  const [moveCount, setMoveCount] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const moveText = () => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth;
        const totalDistance = textWidth + window.innerWidth;

        setPosition((prevPosition) => {
          const newPosition = prevPosition - 1.3;
          // Check if the text has been completely displayed
          if (Math.abs(newPosition) >= totalDistance) {
            setMoveCount((prevCount) => prevCount + 1); // Increment move count
            return window.innerWidth; // Reset position to start from the right again
          }
          return newPosition;
        });
      }
    };
    const interval = setInterval(moveText, 20);

    return () => clearInterval(interval);
  }, []); // Removed moveCount from dependencies to prevent re-creating interval unnecessarily

  useEffect(() => {
    const updatePositionBasedOnTextWidth = () => {
      if (textRef.current) {
        setPosition(window.innerWidth);
      }
    };

    window.addEventListener("resize", updatePositionBasedOnTextWidth);
    updatePositionBasedOnTextWidth();

    return () =>
      window.removeEventListener("resize", updatePositionBasedOnTextWidth);
  }, []);

  const renderHashtags = () => {
    return hashtags.join(
      " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 "
    );
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
