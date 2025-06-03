import React from 'react';
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SpecialtyImg from '../../assets/images/construction2.jpg';
import CivilImg from '../../assets/images/construction1.jpg';
import ResidentialImg from '../../assets/images/engineer-4925140_1280.jpg';
import CorporateImg from '../../assets/images/construction6.jpg';
import ConstructionImg from '../../assets/images/construction2.jpg'; 
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import AvatarImg from '../../assets/images/author-2.jpg';
import BlogImg from '../../assets/images/construction121.jpg';
import BenefitsImg from '../../assets/images/construction9.jpg';
import ChallengesImg from '../../assets/images/construction3.jpg';


// import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css/pagination';




const Home = () => {
  return (
    <>

      <Header/>
      
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
                            <a className='btn btn-primary large'>Contact Now</a>
                            <a className='btn btn-secondary ms-2 large'>View Projects</a>
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

          {/* Our Services Section */}
          <section className='section-3 bg-light py-5'>
            <div className='container-fluid py-5'>
              <div className='section-header text-center'>
                <span>our services</span>
                <h2>Our construction services</h2>
                <p>We offer a diverse array of construction services, 
                  spanning residential, commercial, and industrial projects.</p>
              </div>

              {/* Cards */}
              <div className='row pt-4'>

                {/* Specialty Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={SpecialtyImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Specialty Construction</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

                {/* Civil Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={CivilImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Civil Construction</h3>
                      </div>
                      <div className='service-content'>
                        <p>Civil construction is a core sector within the construction industry that focuses on the design, development and maintenance of infrastructure that supports modern society.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

                {/* Residential Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={ResidentialImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Residental Construction</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

                {/* Corporate Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={CorporateImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Corporate Construction</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>


          {/* Why Choose Us Section */}
          <section className='section-4 py-5'>
            <div className='container py-5'>

              <div className='section-header text-center'>
                  <span>Why Choose Us</span>
                  <h2>Discover our wide variety of projects</h2>
                  <p>Created in close partnership with our clients and collaborators, this
                    approach merges industry expertise,<br/>
                    decades of experience, innovation, and flexibility to consistently deliver excellence.
                  </p>
                </div>

              {/* Cards */}
              <div className='row pt-4'>

                {/* Cutting-Edge Solutions card */}
                <div className='col-md-4'>
                  <div className='card shadow border-0 p-4'>

                    <div className='card-icon'>
                      <img src={Icon1} alt="" />
                    </div>

                    <div className='card-title mt-3'>
                      <h3>Cutting-Edge Solutions</h3>
                    </div>

                    <p>Small actions create big impacts. It all 
                        begins and ends with each employee committing to
                        safer work practices daily, ensuring they return 
                        home safely.
                    </p>
                    

                  </div>
                </div>

                {/* Superior Craftsmanship card */}
                <div className='col-md-4'>
                  <div className='card shadow border-0 p-4'>

                    <div className='card-icon'>
                      <img src={Icon2} alt="" />
                    </div>

                    <div className='card-title mt-3'>
                      <h3>Superior Craftsmanship</h3>
                    </div>

                    <p>Small actions create big impacts. It all 
                        begins and ends with each employee committing to
                        safer work practices daily, ensuring they return 
                        home safely.
                    </p>
                    

                  </div>
                </div>

                {/* Knowledge and Expertise card */}
                <div className='col-md-4'>
                  <div className='card shadow border-0 p-4'>

                    <div className='card-icon'>
                      <img src={Icon3} alt="" />
                    </div>

                    <div className='card-title mt-3'>
                      <h3>Knowledge and Expertise</h3>
                    </div>

                    <p>Small actions create big impacts. It all 
                        begins and ends with each employee committing to
                        safer work practices daily, ensuring they return 
                        home safely.
                    </p>
                    

                  </div>
                </div>

              </div>

            </div>
          </section>



          {/* Our Projects Section */}
          <section className='section-3 bg-light py-5'>
            <div className='container-fluid py-5'>
              <div className='section-header text-center'>
                <span>our projects</span>
                <h2>Discover our diverse range of projects</h2>
                <p>We offer a diverse array of construction services, 
                  spanning residential, commercial, and industrial projects.</p>
              </div>

              {/* Cards */}
              <div className='row pt-4'>

                {/* Specialty Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={ConstructionImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Kolkata Project</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

                {/* Civil Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={ConstructionImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Kolkata Project</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

                {/* Residential Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={ConstructionImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Kolkata Project</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

                {/* Corporate Construction card */}
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>

                    <div className='service-image'>
                      <img src={ConstructionImg} alt="" className='w-100'/>
                    </div>
                    <div className='service-body'>
                      <div className='service-title'>
                        <h3>Kolkata Project</h3>
                      </div>
                      <div className='service-content'>
                        <p>Specialty construction is a niche sector within the construction
                          industry that focuses on projects requiring specialized skills, materials, 
                          and techniques.</p>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>


          {/* Testimonials Section */}
          <section className='section-5 py-5'>
            <div className='container'>

              <div className='section-header text-center'>
                <span>Testimonials</span>
                <h2>What people are saying about us</h2>
                <p>We offer a diverse array of construction services, spanning residental,
                  commercial, and industrial projects.</p>
              </div>

              <Swiper
              modules={[ Pagination ]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              >

              {/* Comment 1 */}
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-4'>

                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>

                    <div className='content pt-5 pb-2'>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perspiciatis porro a rem ex cumque excepturi amet, eius molestiae, laboriosam officiis facilis quasi commodi voluptatum quidem ea dolores corrupti veniam, architecto dolorem? Libero quae qui consequuntur saepe? Illo iste possimus nihil odio est magnam, expedita quasi, saepe sit mollitia architecto!</p>
                    </div>

                    <hr/>

                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              {/* Comment 2 */}
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-4'>

                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>

                    <div className='content pt-5 pb-2'>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perspiciatis porro a rem ex cumque excepturi amet, eius molestiae, laboriosam officiis facilis quasi commodi voluptatum quidem ea dolores corrupti veniam, architecto dolorem? Libero quae qui consequuntur saepe? Illo iste possimus nihil odio est magnam, expedita quasi, saepe sit mollitia architecto!</p>
                    </div>

                    <hr/>

                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              {/* Comment 3 */}
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-4'>

                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>

                    <div className='content pt-5 pb-2'>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perspiciatis porro a rem ex cumque excepturi amet, eius molestiae, laboriosam officiis facilis quasi commodi voluptatum quidem ea dolores corrupti veniam, architecto dolorem? Libero quae qui consequuntur saepe? Illo iste possimus nihil odio est magnam, expedita quasi, saepe sit mollitia architecto!</p>
                    </div>

                    <hr/>

                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              {/* Comment 4 */}
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-4'>

                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>

                    <div className='content pt-5 pb-2'>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perspiciatis porro a rem ex cumque excepturi amet, eius molestiae, laboriosam officiis facilis quasi commodi voluptatum quidem ea dolores corrupti veniam, architecto dolorem? Libero quae qui consequuntur saepe? Illo iste possimus nihil odio est magnam, expedita quasi, saepe sit mollitia architecto!</p>
                    </div>

                    <hr/>

                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              

             
    
              </Swiper>

            </div>
          </section>


          {/* Blog & news section */}
          <section className='section-6 bg-light py-5'>

            <div className='container'>
              <div className='section-header text-center'>
                <span>Blog & News</span>
                <h2>Articles & blog post</h2>
                <p>We specialize in a wide range of construction services, including residental,
                   commercial, and industrial projects.</p>
              </div>
            
              <div className='row pt-3'>


                {/* Dummy article new */}
                <div className='col-md-4'>
                  <div className='card shadow border-0'>
                    <div className='card-img-top'>
                      <img src={BlogImg} alt="" className='w-100'/>
                    </div>
                    <div className='card-body p-4'>
                      <div className='mb-3'>
                        <a href='#' className='title'>Dummy article new</a>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>
                  </div>
                </div>

                {/* The Benefits of Modular Construction Efficiency, Flexibility, and Sustainability */}  
                <div className='col-md-4'>
                  <div className='card shadow border-0'>
                    <div className='card-img-top'>
                      <img src={BenefitsImg} alt="" className='w-100'/>
                    </div>
                    <div className='card-body p-4'>
                      <div className='mb-3'>
                        <a href='#' className='title'>The Benefits of Modular Construction Efficiency, Flexibility, and Sustainability</a>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>
                  </div>
                </div>

                {/* Challenges and Solutions in Commercial Construction Projects */}
                <div className='col-md-4'>
                  <div className='card shadow border-0'>
                    <div className='card-img-top'>
                      <img src={ChallengesImg} alt="" className='w-100'/>
                    </div>
                    <div className='card-body p-4'>
                      <div className='mb-3'>
                        <a href='#' className='title'>Challenges and Solutions in Commercial Construction Projects</a>
                      </div>
                      <a href='#' className='btn btn-primary small'>Read More</a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>



          
          



      </main>


      {/* Footer Section */}
      <Footer/>

    </>
    
  );
}

export default Home