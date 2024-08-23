import ducksLogo from "../assets/ducksLogo.png";

export default function Header() {
  return (
    <>
      <div className="headerDiv">
        <div className="titlesDiv">
          <h1 className="headerTitle">Derbyshire Ducks</h1>
          <p className="subheading">Flag American Football Team</p>
          <p className="est">Est. 2023</p>
        </div>
        <img
          className="ducksLogo"
          alt="Derbyshire Ducks Logo"
          src={ducksLogo}
        />
      </div>
    </>
  );
}
