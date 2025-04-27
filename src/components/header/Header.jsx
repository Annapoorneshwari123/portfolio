import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './header.css'

function Header() {
  return (
  
       <Navbar collapseOnSelect expand="lg"  variant="dark" className='navbar '>
 <div>
 <Navbar.Brand href="/" className='fs-4 fw-normal'>PORTFOLIO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </div>
 <div>
 <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="/">ABOUT</Nav.Link>
      <Nav.Link href="/education">EDUCATION</Nav.Link>
      <Nav.Link href="/projects">PROJECTS</Nav.Link>
      <Nav.Link href="/contact">CONTACT</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
 </div>
</Navbar>
    
  )
}

export default Header