import Container from "react-bootstrap/Container";
import { useState } from "react";
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
   
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user)
      navigate("/dashboard")
    }).catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
  }

  return (
    <>
      Sign up!
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Display Name</Form.Label>
                <Form.Control type="text" placeholder="Display Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
              </Form.Group>

              <Button type="submit" onClick={onSubmit}>
                Sign up
              </Button>
            </Form>
          </Col>
          <Row className="justify-content-center mt-5">
            Already Have an account?
            <Button type="submit" onClick={onSubmit}>
              Login
            </Button>
          </Row>
        </Row>
      </Container>
    </>
  );
}
