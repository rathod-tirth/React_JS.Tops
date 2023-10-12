import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/product">Product</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/state">State</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/context">Context</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;