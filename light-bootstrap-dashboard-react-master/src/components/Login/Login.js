import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import { Link, useHistory, NavLink } from "react-router-dom";
import { signInWithGoogle } from "firebase.js";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "firebase.js";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/admin/profile");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card style={{ marginTop: "200px", marginLeft : "575px", width: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" style={{ marginTop: "20px" }}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              style={{ marginTop: "20px" }}
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <Form style={{ marginTop: "20px" }}>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/homepage">Sign Up</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
