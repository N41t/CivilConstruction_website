import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

import BlogImg from '../../assets/images/construction121.jpg';
import BenefitsImg from '../../assets/images/construction9.jpg';
import ChallengesImg from '../../assets/images/construction3.jpg';

const Blogs = () => {
  return (
    <>
        <Header/>
            <main>
                {/* Home section */}
                <Hero preHeading='Quality. Integrity. Value.' 
                    heading='Blogs'
                    text='We excel at transforming visions into reality <br/> through outstanding 
                            craftsmanship and precise.' 
                />

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
        <Footer/>
    </>
  )
}

export default Blogs