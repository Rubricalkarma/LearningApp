import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { auth} from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

function NavbarWrapper() {

const [user, loading, error] = useAuthState(auth);
var isLoggedIn = user != null

  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>App</Navbar.Brand>
        <Link to={'dashboard'}> Dashboard</Link>
        <Link to={'explore'}> Explore</Link>
        <Link to={'learn'}> Learn</Link>
        {isLoggedIn ? logOut() : loginAndSignup()}

      </Container>
    </Navbar>
  );
}

function loginAndSignup(){
  return <>
          <Link to={'login'}> Login</Link>
        <Link to={'signup'}> Sign up</Link>
  </>
}

function logOut(){
  return <>
      <span>{auth.currentUser.email}</span>
      <Button className="btn-test" onClick={() => signOut(auth)}> Log out</Button>
  </>
}

export default NavbarWrapper;
