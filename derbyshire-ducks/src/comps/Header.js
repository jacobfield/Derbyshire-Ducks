import ducksLogo from "../assets/ducksLogo.png";

export default function Header() {
  return (
    <>
      <div className="headerDiv">
        <h1 className="headerTitle">Derbyshire Ducks</h1>
        <p>Contact</p>
        <img
          className="ducksLogo"
          alt="Derbyshire Ducks Logo"
          src={ducksLogo}
        />
      </div>
    </>
  );
}
