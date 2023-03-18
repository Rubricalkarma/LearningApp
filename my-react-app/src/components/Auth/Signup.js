import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../Service/AuthenticationService.tsx";
import * as yup from "yup"

import { Formik } from "formik";

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('')
  const navigate = useNavigate();

  const schema = yup.object().shape({
    displayName: yup.string().required("Display name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required")
  })

  async function onSubmit(e) {
    //e.preventDefault();
    console.log('submitting')
    //createNewUser(email, password, displayName)
   
    // await createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredentials) => {
    //   const user = userCredentials.user;
    //   console.log(user)
    //   navigate("/dashboard")
    // }).catch((error)=> {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorCode, errorMessage);
    // })
  }

  return (
    <>

    <Formik
    validationSchema={schema}
    onSubmit={onSubmit}
    initialValues={{
      displayName:"",
      email:"",
      password:""
    }}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
            <Container className="mt-5">
              <Row className="justify-content-center">
            <Form.Group as={Col} className="col-6" controlId="validationFormikDisplayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control 
              type="text"
              name="displayName"
              value={values.displayName}
              onChange={handleChange}
              isInvalid={!!errors.displayName}/>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="justify-content-center">
            <Form.Group as={Col} className="col-6 mt-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email}/>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="justify-content-center">
            <Form.Group as={Col} className="col-6 mt-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}/>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="justify-content-center">
              <Col className="col-4 mt-3">
            <Button type="submit">Sign Up</Button>
            </Col>
            </Row>
            </Container>
            </Form>

      )}
      </Formik>

    </>
  )

  // return (
  //   <>
  //     Sign up!
  //     <Container>
  //       <Row>
  //         <Col>
  //           <Form>
  //             <Form.Group className="mb-3" controlId="formDisplayName">
  //               <Form.Label>Display Name</Form.Label>
  //               <Form.Control type="text" placeholder="Display Name" onChange={(e) => setDisplayName(e.target.value)} />
  //             </Form.Group>

  //             <Form.Group className="mb-3" controlId="formEmail">
  //               <Form.Label>Email address</Form.Label>
  //               <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  />
  //             </Form.Group>

  //             <Form.Group className="mb-3" controlId="formPassword">
  //               <Form.Label>Password</Form.Label>
  //               <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
  //             </Form.Group>

  //             <Button type="submit" onClick={onSubmit}>
  //               Sign up
  //             </Button>
  //           </Form>
  //         </Col>
  //         <Row className="justify-content-center mt-5">
  //           Already Have an account?
  //           <Button type="submit" onClick={onSubmit}>
  //             Login
  //           </Button>
  //         </Row>
  //       </Row>
  //     </Container>
  //   </>
  // );
}
