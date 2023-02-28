import { Button } from "bootstrap";
import Form from "react-bootstrap/Form";

export default function Signup() {

    async function onSubmit(e){
        e.preventDefault();
        alert()
    }

  return (
    <>
      Sign up!
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button type="submit" onClick={onSubmit}>Sign up </Button>
      </Form>
    </>
  );
}
