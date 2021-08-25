import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                       This is a free resume builder application which stores userdata on cloud and has four diffrent templates of standard formats. It also converts your resume into a pdf document for external usage.
                    </p>
        
                    <h2 className="email text-large">
                        Happy Resume Building
                    </h2>
        
                    <p className="happy-to-help">
                        
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;