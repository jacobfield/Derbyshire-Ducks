import React from "react";
import { useState, useEffect } from "react";
const MovingBar: React.FC = () => {
  const [position, setPosition] = useState(window.innerWidth);

  useEffect(() => {
    const moveText = () => {
      // update position to move left.
    };
  }, []);

  return (
    <div className="movingBar">
      <p className="movingText">
        #DerbyshireDucks #JoinTheFlock #QuackQuack #FlagFootball #BAFA
        #QuackAttack #DuckSquad #VFormation #FlagIsSwag #Takeoff
      </p>
    </div>
  );
};

export default MovingBar;
