import JumbotronTitle from "./JumbotronTitle";
import JumbotronImage from "./JumbotronImage";
import Toggle from "../Switch/Toggle";
import SunIcon from "../Jumbotron/assets/icons/sunIcon";
import MoonIcon from "../Jumbotron/assets/icons/moonIcon";
import { useNavigate } from "react-router-dom";
import "./Jumbotron.css"

function Jumbotron() {

  const navigate = useNavigate();

  const Logout = () => {

    if (localStorage.getItem("loggedin") !== null) {
      let loggedIn = localStorage.getItem("loggedin");
      console.log(loggedIn);
      if (loggedIn) {
        localStorage.setItem("loggedin", false);
        navigate('/');
        console.log("user logged out");
      }
    }

  }

  return (
    <section className="hero jumbo is-medium is-link">
      <div className="hero-body">
        <JumbotronImage />
        <div>
          <JumbotronTitle />
          <div className="theme-switch">
            <SunIcon />
            <Toggle />
            <MoonIcon />
          </div>
        </div>
        <button className="btn-logout" onClick={Logout}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default Jumbotron;