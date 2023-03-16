import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    console.log(loggeduser);
    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      localStorage.setItem("loggedin", true);
      navigate("/RecipeSearchContainer");
    }
    else {
      alert("Your username or password are incorrect. Please try again");
    }
  }

  return (
    <div class="vh-100 d-flex justify-content-center align-items-top">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card bg-white shadow-lg">
              <div class="card-body p-5">
                <form class="mb-3 mt-md-4" onSubmit={handleLogin}>
                  <h2 class="fw-bold mb-2 text-uppercase ">
                    Grabber Rewired Login
                  </h2>
                  <p class=" mb-5">Please enter your login and password!</p>
                  <div class="mb-3">
                    <label for="email" class="form-label ">
                      Email address
                    </label>
                    <input
                      name="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label ">
                      Password
                    </label>
                    <input
                      name="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="*******"
                    />
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-outline-dark" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <div>
                  <p class="mb-0  text-center">
                    Don't have an account?
                    <a href="/SignUp" class="text-primary fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

