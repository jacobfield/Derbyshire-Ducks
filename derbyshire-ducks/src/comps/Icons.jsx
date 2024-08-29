import { TbScoreboard } from "react-icons/tb";
import { GiBlackBelt } from "react-icons/gi";
import { PiPersonSimpleThrow } from "react-icons/pi";
import { FaFootballBall } from "react-icons/fa";
import { GiDuck } from "react-icons/gi";
export function Icons() {
  return (
    <div className="iconsContainer">
      <FaFootballBall className="iconPic" />
      <TbScoreboard className="iconPic" />
      <GiBlackBelt className="iconPic" />
      <PiPersonSimpleThrow className="iconPic" />
      <GiDuck className="iconPic" />
    </div>
  );
}
