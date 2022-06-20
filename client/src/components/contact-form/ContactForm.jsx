import React from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'

import "./contactform-styles.css"

function ContactForm() {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <div id='booking'>
            {
                isMatch ? (
                    <>
                                {null}
                            </>
                ) : (
                    <>
                    <h1 id='book-appointment-title' style={{marginLeft: "30rem", marginTop: "15rem"}}>Book an Appointment</h1>
                    </>
                )
            }
            
            <div className='container'>
                <div className="contact-box">
                    <div className="right">
                        <form action="https://formsubmit.co/aahmetmeliksah@email.com" method="POST">
                            <input className='field' type="email" name="email" required placeholder='Your email address' />
                            <input className='field' type="date" name="date" required />
                            <input className='field' type="text" name="name" required placeholder='Name' />
                            <input className='field' type="number" name="phone_number" placeholder='phonenumber' />
                            <textarea className='field area' name="message" cols="30" rows="10" placeholder='Additional message'></textarea>
                            <button className='formBtn' type="submit">Send</button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContactForm