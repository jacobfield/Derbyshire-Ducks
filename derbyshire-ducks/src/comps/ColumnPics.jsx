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
          <div className="overlayText">Column 1</div>
        </div>
        <div className="imageWrapper">
          <img
            className="columnPic pic2"
            alt="ducks team column 2"
            src={column2}
          ></img>
          <div className="overlayText">Column 2</div>
        </div>
        <div className="imageWrapper">
          <img
            className="columnPic pic3"
            alt="ducks team column 3"
            src={column3}
          ></img>
          <div className="overlayText">Column 3</div>
        </div>
        <div className="imageWrapper">
          <img
            className="columnPic pic4"
            alt="ducks team column 4"
            src={column4}
          ></img>
          <div className="overlayText">Column 4</div>
        </div>
        <div className="imageWrapper teamPicWrapper">
          <img
            className="teamPic pic5"
            alt="Derbyshire Ducks Team"
            src={teamPic}
          ></img>
          <div className="overlayText">Derbyshire Ducks Team</div>
        </div>
      </div>
    </>
  );
}
