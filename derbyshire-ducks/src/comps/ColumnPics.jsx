import column1 from "../assets/ducks_pics/column1.png";
import column2 from "../assets/ducks_pics/column2.png";
import column3 from "../assets/ducks_pics/column3.jpg";
import column4 from "../assets/ducks_pics/column4.png";
export default function ColumnPics() {
  return (
    <div className="picsContainer">
      <img
        className="columnPic pic1"
        alt="ducks team column 1"
        src={column1}
      ></img>
      <img
        className="columnPic pic2"
        alt="ducks team column 2 "
        src={column2}
      ></img>
      <img
        className="columnPic pic3"
        alt="ducks team column 3"
        src={column3}
      ></img>
      <img
        className="columnPic pic4"
        alt="ducks team column 4"
        src={column4}
      ></img>
    </div>
  );
}