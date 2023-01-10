import Tilt from "react-tilt";
import logo from "./Amrendram-dark.png";
import "./logo.css";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner"><img className="logo" src={logo} alt="logo"/> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
