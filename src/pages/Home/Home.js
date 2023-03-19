import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function Login() {
        navigate("/Login");
    };

    function Signup() {
        navigate("/SignUp");
    };

    function Guest() {
        navigate("/RecipeSearchGuest");
    };

    return (
        <div className="container content home-main">
            <div className="spiel row content">
                <p className="title has-text-centered">
                    Welcome to the offspring from the infamous Recipe Grabber
                </p>
                <h3 className="is-size-3 py-2">Stacked with new features:</h3>
                <ul className="is-size-4">
                    <li>User Signup/Login</li>
                    <li>Guest login with limited features</li>
                    <li>Print recipe info when logged in</li>
                    <li>Email recipe info when logged in</li>
                    <li>New chosen recipe pages</li>
                    <li>Adjust serving amounts</li>
                    <li>Generated in React for responsive page changes</li>
                </ul>
            </div>
            

            <div className="row is-centered py-2">
            <h4 className="content pt-6 has-text-centered">User Registration / Login</h4>
                <button className="m-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Login}>Login</button>
                <button className="m-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Signup}>Register</button>
                <button className="m-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Guest}>Continue as Guest</button>
            </div>

            <div>
                <br/> 
                {/* blank space to compensate for footer issues */}
                <br/>
            </div>

        </div>
    );
}

export default Home;
