import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    const navigate = useNavigate()
    const handleHome=()=>{
      navigate('/')
    }
    const handleDash
    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button className='btn btn-outline-dark btn-light 'onClick={handleHome}>Home</Button>
            <Button className='btn btn-outline-dark btn-light 'onClick={handleDashBoard}>DashBoard</Button>
            <Button className='btn btn-outline-dark btn-light 'onClick={handleLogin}>Login</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;