import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (localStorage.getItem("loggedin") !== null) {
      let loggedIn = localStorage.getItem("loggedin");
      console.log(loggedIn);
      if (loggedIn) {
        localStorage.setItem("loggedin", false);
        navigate("/");
        console.log("user logged out");
      }
    }
  };

  return (
    <button className="btn btn-logout" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
