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
          <p className="overlayText">Derbyshire Ducks Team</p>
        </div>
      </div>
    </>
  );
}
