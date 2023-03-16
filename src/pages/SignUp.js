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
    <div className="vh-100 d-flex justify-content-center align-items-top">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card bg-white shadow-lg">
              <div className="card-body p-5">
                <form className="mb-3 mt-md-4" onSubmit={handleSignup}>
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    Grabber Rewired Registration Form
                  </h2>
                  <p className=" mb-5">
                    Please enter your details to sign up for this site
                  </p>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label ">
                      Name
                    </label>
                    <input
                      name="name"
                      value={input.name}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label ">
                      Email address
                    </label>
                    <input
                      name="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label ">
                      Password
                    </label>
                    <input
                      name="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="*******"
                      autoComplete="on"
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-outline-dark" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;