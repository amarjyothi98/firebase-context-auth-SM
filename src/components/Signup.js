import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth(); 
  const { profileName } = useUserAuth(); 

  const [name, setName] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); 

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError("");
    setSubmitButtonDisabled(true); 
    e.preventDefault(); //prevents page not to be refreshed on submit 
    try {
        await signUp(email, password);
        setSubmitButtonDisabled(false); 
        profileName(name); 
        navigate('/');
    } catch (err) {
        setSubmitButtonDisabled(false); 
        setError(err.message)
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button className="signupButton" variant="primary" type="Submit" disabled={submitButtonDisabled}>
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;  