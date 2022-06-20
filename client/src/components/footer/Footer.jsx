import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


import "./footerStyles.css"
function Footer() {

    return (
        <footer className="footer-container" id="contact">
            <div className="workdays">
                <h4>Opening Hours</h4>

                <div className="workday-item">
                    <p>Sunday : Closed</p>
                    <p></p>
                </div>

                <div className="workday-item">
                    <p>Monday, Tuesday - Firday</p>
                    <p>8:30 AM - 3:30 PM</p>
                </div>

                <div className="workday-item">
                    <p>Saturday</p>
                    <p>10:30 AM - 5:30 PM</p>
                </div>
            </div>
            {/* workdays end */}


            <div className="email-and-address">
            <h4>Our Clinic</h4>
                <p>hello@company.co</p>

                <p style={{width: "6rem"}}>123 Digital Art Street, San Diego, CA 92123</p>
            </div>
            {/* email-and-address end */}

            <div className="socials">
                <div className="social-media-icons">
                <FacebookIcon />
                <YouTubeIcon />
                <TwitterIcon />
                <InstagramIcon />
                </div>

                <p>Copyright © Medic Care 2021</p>
                <p>Design: TemplateMo</p>
                <p>Distributed By: Themewagon</p>
            </div>

        </footer>
    )
}

export default Footer