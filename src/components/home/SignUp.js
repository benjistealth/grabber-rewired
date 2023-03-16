import React, { useState } from "react";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function SignUp() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
    
// storing credentials in local storage
const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    
}
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>Sign Up</MDBBtn>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sign Up Now</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* <MDBModalBody onSubmit={handleSubmit}> */}
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    name="firstname"
                    value={input.firstname}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>
                <MDBCol col="6">
                  <MDBInput
                    name="lastname"
                    value={input.lastname}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form2"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>
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
                type="submit"
                size="md"
                onClick={(handleSubmit, toggleShow)}
              >
                sign up
              </MDBBtn>
            </MDBModalBody>
            <MDBModalFooter />
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default SignUp;