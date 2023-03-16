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
        <div className="spiel">
            <p>
                Add a bit of a spiel here about the application
            </p>
            <div>
                <button type="button" onClick={Login}>Login</button>
                <button type="button" onClick={Signup}>Register</button>
            </div>
        </div>
    );
}

export default Home;
