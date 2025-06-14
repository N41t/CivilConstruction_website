import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

import KolkataImg from '../../assets/images/construction3.jpg'; 
import NewDelphiImg from '../../assets/images/construction1212.jpg'; 
import KanpurImg from '../../assets/images/construction2.jpg'; 
import DenverImg from '../../assets/images/construction122.jpg'; 



const Projects = () => {
  return (
    <>
        <Header/>

            <main>
                <Hero preHeading='Quality. Integrity. Value.' 
                heading='Our Projects'
                text='We excel at transforming visions into reality <br/> through outstanding 
                    craftsmanship and precise.' 
                />
            </main>

            <section className='section-3 bg-light py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <span>our projects</span>
                        <h2>Discover our diverse range of projects</h2>
                        <p>We offer a diverse array of construction services, 
                            spanning residential, commercial, and industrial projects.</p>
                        </div>
            
                        {/* Cards */}
                        <div className='row pt-4'>
            
                        {/* Kolkata card */}
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
            
                            <div className='service-image'>
                                <img src={KolkataImg} alt="" className='w-100'/>
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
            
                        {/* New Delphi card */}
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
            
                            <div className='service-image'>
                                <img src={NewDelphiImg} alt="" className='w-100'/>
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                    <h3>New Delphi Project</h3>
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
            
                        {/* Kanpur card */}
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
            
                            <div className='service-image'>
                                <img src={KanpurImg} alt="" className='w-100'/>
                                </div>
                                <div className='service-body'>
                                  <div className='service-title'>
                                    <h3>Kanpur Project</h3>
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

                            {/* Denver card */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                                <img src={DenverImg} alt="" className='w-100'/>
                                            </div>
                                    <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>Denver Project</h3>
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

export default Projects