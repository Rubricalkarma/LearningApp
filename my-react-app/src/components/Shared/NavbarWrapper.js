import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarWrapper() {
  return (
    <Navbar>
      <Container>
        <Link to={'dashboard'}> Dashboard</Link>
        <Link to={'explore'}> Explore</Link>
        <Link to={'learn'}> Learn</Link>
      </Container>
    </Navbar>
  );
}

export default NavbarWrapper;
