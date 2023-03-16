import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import SignUp from "./SignUp";
function Login() {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
    const [input, setInput] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    const handleLogin = (e) =>
        e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    console.log(loggeduser);
    // if (input.email === loggeduser.email) {
    //     localStorage.setItem("loggedin", true);
    // };
    
    return (
      <>
        <MDBBtn onClick={toggleShow}>Login</MDBBtn>
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Login</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p className="text-black-50 mb-5">
                  Please enter your login and password!
                </p>
                <MDBInput
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
                <MDBInput
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />
                <MDBBtn
                  className="w-100 mb-4"
                  size="md"
                  onClick={(handleLogin, toggleShow)}
                >
                  login
                </MDBBtn>
                <p className="small mb-3 pb-lg-2">
                  <a class="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href={<SignUp />} className="text-blue-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </MDBModalBody>
              <MDBModalFooter />
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}

export default Login;