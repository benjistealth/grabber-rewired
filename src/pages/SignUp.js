import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css"

function SignUp() {
    const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/Login");
  };

  return (
    <div class="vh-100 d-flex justify-content-center align-items-top">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card bg-white shadow-lg">
              <div class="card-body p-5">
                <form class="mb-3 mt-md-4" onSubmit={handleSignup}>
                  <h2 class="fw-bold mb-2 text-uppercase ">
                    Grabber Rewired Registration Form
                  </h2>
                  <p class=" mb-5">
                    Please enter your details to sign up for this site
                  </p>
                  <div class="mb-3">
                    <label for="name" class="form-label ">
                      Name
                    </label>
                    <input
                      name="name"
                      value={input.name}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="John Smith"
                    />
                  </div>
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
                      Register
                    </button>
                  </div>
                </form>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;