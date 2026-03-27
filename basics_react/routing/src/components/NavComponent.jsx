import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function NavScrollExample() {
  const navigate = useNavigate()
  const handleHome = () =>{
    navigate('/')
  }
  const handleClick = () =>{
    navigate('/about')
  }
  const handleDashboard = ()=>{
    navigate('/dashboard')
  }
  const handleSkills = ()=>{
    navigate('/skills')
  }
  const handleProjects = ()=>{
    navigate('/projects')
  }
  const handleContact = () =>{
    navigate('/contact')
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
            <button className='btn btn-outline-dark btn-light 'onClick={handleHome}>Home</button>
            <button className='btn btn-outline-dark btn-light 'onClick={handleDashboard}>Dashboard</button>
            <button className='btn btn-outline-dark btn-light 'onClick={handleClick}>About</button>
            {/* <button className='btn btn-outline-dark btn-light 'onClick={handleClick}>About</button>
            <button className='btn btn-outline-dark btn-light 'onClick={handleClick}>Skills</button>
            <button className='btn btn-outline-dark btn-light 'onClick={handleClick}>Projects</button>
            <button className='btn btn-outline-dark btn-light 'onClick={handleClick}>Contact</button> */}
            <button className='btn btn-outline-dark btn-light 'onClick={handleSkills}>Skills</button>
            <button className='btn btn-outline-dark btn-light 'onClick={handleProjects}>Projects</button>
            {/* <button><Link to='/contact'>Contact</Link></button> */}
            <button className='btn btn-outline-dark btn-light 'onClick={handleContact}>Contact</button>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;