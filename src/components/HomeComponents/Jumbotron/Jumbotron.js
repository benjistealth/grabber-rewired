import React, { useState, useEffect } from "react";
import JumbotronTitle from "./JumbotronTitle";
import JumbotronImage from "./JumbotronImage";
import Toggle from "../Switch/Toggle";
import SunIcon from "../Jumbotron/assets/icons/sunIcon";
import MoonIcon from "../Jumbotron/assets/icons/moonIcon";
import { useNavigate } from "react-router-dom";
import "./Jumbotron.css";

function Jumbotron() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedin");

    if (loggedIn === "false") {
      setIsVisible(false);
    }
  }, []);

  const Logout = () => {
    if (localStorage.getItem("loggedin") !== null) {
      let loggedIn = localStorage.getItem("loggedin");
      console.log(loggedIn);
      if (loggedIn) {
        localStorage.setItem("loggedin", false);
        navigate("/");
        console.log("user logged out");
      }
    }
    window.location.reload();
  };

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
        {isVisible && (
          <button className="btn btn-logout" onClick={Logout}>
            {" "}
            Logout{" "}
          </button>
        )}
      </div>
    </section>
  );
}

export default Jumbotron;
