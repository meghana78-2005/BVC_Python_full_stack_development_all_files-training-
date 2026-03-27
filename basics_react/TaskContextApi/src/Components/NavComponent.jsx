import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../Context/AuthContext'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  const navigate = useNavigate()
  const handleHome = () =>{
    navigate('/dashboard')
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
            <button className='btn btn-outline-dark btn-light ' onClick={handleHome}>Dashboard</button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

// const NavComponent = () => {
//     const [auth,setAuth] = useContext(AuthContext)
//     const handleChange = ()=>{
//         setAuth(auth==="true"?"false":"true")
//     }

//   return (
//     <div>
//       <h1>Welcome</h1>
//       <button onclick={handleChange}>
//         Authenticated
//       </button>
//     </div>
//   )
// }

// export default NavComponent


