import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import AboutImg from '../../assets/images/about-us.jpg';

const Home = () => {
  return (
    <>
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

                  <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>

                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
      
      </header>

      <main>

          {/* Hero Section */}
          <section className='section-1'>
              <div className='hero d-flex align-items-center'>
                  <div className='container-fluid'>
                      <div className='text-center'>
                          <span>Welcome Amazing Constructions</span>
                          <h1>Crafting dreams with <br/> precision and excellence.</h1>
                          <p>We excel at transforming visions into reality through outstanding 
                            craftsmanship and precise <br/> attention to detail. 
                            With years of experience and a dedication to quality.</p>
                          <div className='mt-4'>
                            <a className='btn btn-primary'>Contact Now</a>
                            <a className='btn btn-secondary ms-2'>View Projects</a>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </section>

          {/* About Us Section */}
          <section className='section-2 py-5'> 
            <div className='container py-5'>
              <div className='row'>
                <div className='col-md-6'>
                  <img src={AboutImg} className='w-100' />
                </div>
              

                <div className='col-md-6'>
                  <span>about us</span>

                  <h2>Crafting structures that last a lifetime</h2>

                  <p>Building enduring structures requires a comprehensive approach that
                    combines advanced materials, resilient design, routine maintenace, and
                    sustainable practices. By drawing on historical insights and utilizing
                    modern technology.</p>
                
                  <p>Designing structures that stand the test of time involves a seamless
                    blend of cutting-edge materials, durable design, ongoing upkeep, and
                    eco-friendly practices. By combining lessons from the past with the power of
                    modern technology.
                  </p>
                </div>
              </div>
            </div>
          </section>

      </main>


      {/* Footer Section */}
      <footer>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-3'>
              <h3>UrbanEdge Constructions</h3>
              <div className='pe-5'>
                <p>Our post-construction services gives you peace of mind knowing that
                we are still here for you even after.</p>
              </div>
              
            </div>

            <div className='col-md-3'>
              <h3 className='mb-3'>Our Services</h3>
              <ul>
                <li>
                  <a href=''>Specialty Construction</a>
                </li>
                <li>
                  <a href=''>Civil Construction</a>
                </li>
                <li>
                  <a href=''>Residential Construction</a>
                </li>
                <li>
                  <a href=''>Corporate Construction</a>
                </li>
                <li>
                  <a href=''>Building Constructions</a>
                </li>
                <li>
                  <a href=''>Industrial Construction</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-3'>Quick Links</h3>
              <ul>
                <li>
                  <a href=''>About us</a>
                </li>
                <li>
                  <a href=''>Services</a>
                </li>
                <li>
                  <a href=''>Projects</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
                <li>
                  <a href=''>Contact us</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-3'>Contact Us</h3>
              <ul>
                <li>
                  <a href=''>(800-000-0000)</a>
                </li>
                <li>
                  <a href=''>info@example.com</a>
                </li>
                <p>
                  14738, Frewsburg, NY
                </p>
              </ul>
            </div>

            <hr/>

            <div className='text-center pt-4'>Copyright © 2025 UrbanEdge Constructions. All Rights Reserved.</div>

          </div>
        </div>
      </footer>

    </>
    
  );
}

export default Home