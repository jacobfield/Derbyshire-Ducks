import React from "react";
import { useState, useEffect } from "react";
const MovingBar: React.FC = () => {
  const [position, setPosition] = useState(window.innerWidth);

  useEffect(() => {
    const moveText = () => {
      // update position to move left.
      setPosition((prevPosition) => prevPosition - 2);
    };
    const interval = setInterval(moveText, 20); // can adjust for smoother animation

    if (position < -2000) {
      setPosition(window.innerWidth);
    }
    return () => clearInterval(interval); //cleanup on comp unmount
  }, [position]);

  return (
    <div className="movingBar">
      <p
        className="movingText"
        style={{ transform: `translateX(${position}px` }}
      >
        #DerbyshireDucks #JoinTheFlock #QuackQuack #FlagFootball #BAFA
        #QuackAttack #DuckSquad #VFormation #FlagIsSwag #Takeoff
      </p>
    </div>
  );
};

export default MovingBar;
