import ducksLogo from "../assets/ducksLogo.png";
import MovingBar from "./MovingBar.tsx";
export default function Header() {
  return (
    <>
      <div className="headerDiv">
        <h1 className="headerTitle">Derbyshire Ducks</h1>
        {/* <p>Contact</p> */}
        <img
          className="ducksLogo"
          alt="Derbyshire Ducks Logo"
          src={ducksLogo}
        />
      </div>
      <MovingBar></MovingBar>
    </>
  );
}
