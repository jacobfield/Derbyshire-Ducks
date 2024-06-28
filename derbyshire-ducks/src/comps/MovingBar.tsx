import React, { useState, useEffect, useRef } from "react";

const MovingBar: React.FC = () => {
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
  ]); // Removed the semicolon here
  const [positions, setPositions] = useState(
    hashtags.map(() => window.innerWidth)
  );
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const moveText = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos, index) => {
          const currentWidth = textRefs.current[index]?.offsetWidth || 0;
          let newPos = pos + 2; // Move each element to the right by 2px
          if (newPos + currentWidth > window.innerWidth) {
            // Check if element is off-screen
            const lastPos = Math.max(
              ...prevPositions.filter((_, i) => i !== index)
            );
            const lastWidth =
              textRefs.current[prevPositions.indexOf(lastPos)]?.offsetWidth ||
              0;
            newPos = lastPos + lastWidth + 10; // Reposition to the back with a gap
          }
          return newPos;
        })
      );
    };

    const interval = setInterval(moveText, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="movingBar">
      <p
        className="movingText"
        style={{ position: "relative", whiteSpace: "nowrap" }}
      >
        {hashtags.map((hashtag, index) => (
          <span
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            style={{ position: "absolute", left: `${positions[index]}px` }}
          >
            {hashtag +
              "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MovingBar;
