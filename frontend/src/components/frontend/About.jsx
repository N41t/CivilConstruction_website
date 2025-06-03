import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import {default as AboutNew} from '../common/About'

const About = () => {
  return (
    <>
      <Header/>
        <main>

        {/* Home section */}
        <section className='section-7'>
              <div className='hero d-flex align-items-center'>
                  <div className='container'>
                      <div className='text-left'>
                          <span>Quality. Integrity. Value.</span>
                          <h1>About Us</h1>
                          <p>We excel at transforming visions into reality <br/> through outstanding 
                            craftsmanship and precise.</p>
                          
                      </div>
                  </div>
              </div>
          </section>

          <AboutNew/>

        </main>
      <Footer/>
    </>
  )
}

export default About