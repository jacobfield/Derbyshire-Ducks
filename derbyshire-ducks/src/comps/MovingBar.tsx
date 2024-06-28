import React from "react";
import { useState, useEffect, useRef } from "react";
const MovingBar: React.FC = () => {
  const [position, setPosition] = useState(window.innerWidth);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const moveText = () => {
      // update position to move left.
      setPosition((prevPosition) => prevPosition - 2);
    };
    const interval = setInterval(moveText, 20); // can adjust for smoother animation

    if (position < -1570) {
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
        #DerbyshireDucks #JoinTheFlock #QuackQuack #FlagFootball #BAFA
        #QuackAttack #DuckSquad #FlyingVFormation #FlagIsSwag #Takeoff
      </p>
    </div>
  );
};

export default MovingBar;
