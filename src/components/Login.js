import React, { useState } from 'react'
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link } from 'react-router-dom';
import '../App.css'

import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth(); 

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault(); //prevents page not to be refreshed on submit 
    try {
        await logIn(email, password);
        navigate('/home');
    } catch (err) {
        setError(err.message)
    }
  };


  return (
    <>
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Auth Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
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
          <Button variant="primary" type="Submit">
            Log In
          </Button>
        </div>
      </Form>
      <hr />
      <div>
        <GoogleButton
          className="g-btn"
          type="dark"
          // onClick={handleGoogleSignIn}
        />
      </div>
    </div>
    <div className="p-4 box mt-3 text-center">
      Don't have an account? <Link to="/signup">Sign up</Link>
    </div>
  </>
  )
}
