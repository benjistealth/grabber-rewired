import JumbotronTitle from "./JumbotronTitle";
import JumbotronImage from "./JumbotronImage";
import Toggle from "./Toggle";
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
        <JumbotronTitle />
        <Toggle />
        <button className="btn btn-logout" onClick={Logout}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default Jumbotron;