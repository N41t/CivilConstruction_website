import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

import SpecialtyImg from '../../assets/images/construction2.jpg';
import CivilImg from '../../assets/images/construction1.jpg';
import ResidentialImg from '../../assets/images/engineer-4925140_1280.jpg';
import CorporateImg from '../../assets/images/construction6.jpg';

const Services = () => {
  return (
    <>
        <Header/>

            <Hero preHeading='Quality. Integrity. Value.' 
              heading='Services'
              text='We excel at transforming visions into reality <br/> through outstanding 
                    craftsmanship and precise.' 
            />

            <section className='section-3 bg-light py-5'>
                        <div className='container py-5'>
                          <div className='section-header text-center'>
                            <span>our services</span>
                            <h2>Our construction services</h2>
                            <p>We offer a diverse array of construction services, 
                              spanning residential, commercial, and industrial projects.</p>
                          </div>
            
                          {/* Cards */}
                          <div className='row pt-4'>
            
                            {/* Specialty Construction card */}
                            <div className='col-md-4 col-lg-4'>
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
                            <div className='col-md-4 col-lg-4'>
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
                            <div className='col-md-4 col-lg-4'>
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
                            <div className='col-md-4 col-lg-4'>
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
        <Footer/>
    </>
  )
}

export default Services