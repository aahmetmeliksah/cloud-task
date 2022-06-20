import React from 'react'

import "./aboutStyles.css"

function About() {
    return (
        <section className='about-container' id='about'>
          
          <div className="about-dr">
            <h2 style={{color: "black"}}>Meet Dr. Carson</h2>
            <p>
            Protect yourself and others by wearing masks and washing hands frequently. 
            Outdoor is safer than indoor for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) 
            will experience mild to moderate symptoms and recover without special treatments. 
            <br /> <br />
            You can feel free to use this CSS template for your medical profession or health care related websites. 
            You can support us a little via PayPal if this template is good and useful for your work.
            </p>
          </div>
            
          
          <div className="experience">
            <p><span id='twelve'>12</span> Years <br /> <span style={{marginLeft: "1.5rem"}}>of Experiences</span>  </p>
          </div>
        </section>
    )
}

export default About