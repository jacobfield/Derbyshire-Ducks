import column1 from "../assets/ducks_pics/column1.png";
import column2 from "../assets/ducks_pics/column2.png";
import column3 from "../assets/ducks_pics/column3.jpg";
import column4 from "../assets/ducks_pics/column4.png";
import teamPic from "../assets/ducks_pics/teamPic.jpg";

export default function ColumnPics() {
  return (
    <>
      <div className="picsContainer">
        <div className="imageWrapper">
          <img
            className="columnPic pic1"
            alt="ducks team column 1"
            src={column1}
          ></img>
          <p className="overlayText">
            <br />
            We're Derbyshire's only Flag Football Team. <br />
            <br />
            Established in 2023, we are rapidly growing, and we want you to join
            us!
          </p>
        </div>
        <div className="imageWrapper">
          <img
            className="columnPic pic2"
            alt="ducks team column 2"
            src={column2}
          ></img>
          <p className="overlayText">
            We welcome anybody who wants to play, regardless of age, gender,
            experience, or athletic ability!
          </p>
        </div>
        <div className="imageWrapper">
          <img
            className="columnPic pic3"
            alt="ducks team column 3"
            src={column3}
          ></img>
          <p className="overlayText">
            We train on Tuesdays between 6-8pm. Get in touch for more
            information!
          </p>
        </div>
        <div className="imageWrapper">
          <img
            className="columnPic pic4"
            alt="ducks team column 4"
            src={column4}
          ></img>
          <p className="overlayText">
            All you need to join are some boots and a good attitude - Flag
            Football is for everyone!
          </p>
        </div>
        <div className="imageWrapper teamPicWrapper">
          <img
            className="teamPic pic5"
            alt="Derbyshire Ducks Team"
            src={teamPic}
          ></img>
          <div className="rulesWrapper">
            <h2 className="overlayText rulesHeading">WHAT IS FLAG FOOTBALL?</h2>
            <div className="rulePicWrapper">
              <p className="rules1 rulesText">
                Flag Football is like American Football’s fun-loving,
                non-contact sibling – all the action, none of the bruises! At
                the Derbyshire Ducks, we’ve embraced this fast-paced sport where
                strategy meets athleticism, and everyone gets in on the action.
              </p>
            </div>
            <div className="rulePicWrapper">
              <p className="rules2 rulesText">
                Here’s the deal: two teams of five face off, with one on Offense
                and the other on Defense. The goal? Score touchdowns, each worth
                six points, by moving the ball down the field and across the
                opponent’s goal line.
              </p>
            </div>
            <div className="rulePicWrapper">
              <p className="rules3 rulesText">
                But instead of crunching tackles, players wear belts with two
                flags. The Offense gets four attempts ("downs") to reach the
                halfway line, and if successful, another four to hit the end
                zone. They can run or pass the ball – whatever it takes to
                score.
              </p>
            </div>
            <div className="rulePicWrapper">
              <p className="rules4 rulesText">
                The Defense, meanwhile, aims to stop the Offense by snatching a
                flag from the ball carrier’s belt, ending the play on the spot.
                And if they’re feeling extra crafty, they might even snag an
                interception and turn the tables.
              </p>
            </div>
            <div className="rulePicWrapper">
              <p className="rules5 rulesText">
                Games are officiated by players from other teams, and while we
                Ducks might not have the fanciest uniforms, we know how to keep
                things fair and fun. Open to men and women over 16, Flag
                Football is simple, exciting, and guaranteed to give you a
                quacking good time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
