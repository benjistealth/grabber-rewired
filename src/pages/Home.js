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

    return (
        <div className="container content">
            <div className="spiel row content">
                <p className="title has-text-centered">
                    Welcome to the the offspring to the infamous Recipe Grabber
                </p>
                <h3 className="is-size-3 py-2">Stacked with new features:</h3>
                <ul className="is-size-4">
                    <li>User Login</li>
                    <li>Send recipe to other registered users</li>
                    <li>Email recipe</li>
                    <li>New chosen recipe pages</li>
                    <li>Generated in React for responsive performance </li>
                </ul>


            </div>
            

            <div className="row is-centered py-2">
            <p className="content pt-6 has-text-centered">User Registration / Login</p>
                <button className="m-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Login}>Login</button>
                <button className="m-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Signup}>Register</button>
            </div>

        </div>
    );
}

export default Home;
