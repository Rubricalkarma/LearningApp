import Container from "react-bootstrap/Container";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const navigate = useNavigate();

  async function onLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
        setLoginErrorMessage(getErrorMessage(error.code))
      });
  }

  return (
    <>
      Log in!
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" onClick={onLogin}>
                Login
              </Button>
            </Form>
          </Col>
          {loginError && <Alert variant="danger">{loginErrorMessage}</Alert>}
        </Row>
      </Container>
    </>
  );
}

const getErrorMessage = (errorCode) => {
  switch(errorCode){
    case "auth/wrong-password": return "Incorrect e-mail and password."
    case "auth/user-not-found": return "No account found with that e-mail."
    default: return `Error: ${errorCode}`
  }
}
