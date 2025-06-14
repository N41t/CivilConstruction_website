import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export const Header = () => {
  return (
    <header>

        {/* container необходим для размещения по середине */}
        {/* py-3 -> отступ сверху */}
        <div className='container py-3'>
          <Navbar expand="lg">


              {/* Заголовок в navbar */}
              <Navbar.Brand href="#home" className='logo'>
                <span>UrbanEdge</span> Constructions
              </Navbar.Brand>

              {/* Кнопка-гамбургер (отображается на мобильных) или при уменьшении размеров сайта */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              {/* Карусель категорий в navbar */}
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">

                  <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                  <Nav.Link href="/about" className='nav-link'>About Us</Nav.Link>
                  <Nav.Link href="/services" className='nav-link'>Services</Nav.Link>
                  <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                  <Nav.Link href="/blogs" className='nav-link'>Blogs</Nav.Link>
                  <Nav.Link href="#" className='nav-link'>Contact Us</Nav.Link>

                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
      
      </header>
  )
}

export default Header