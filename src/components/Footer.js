import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin,FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa' ;


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className='left'>
                    <div className="location">
                        <FaSearchLocation size={20} style={{color: "#ffffff", marginRight: "2rem"}}/>
                        <div>
                            <h4>Mladá Boleslav</h4>
                            <p> Ptacka 281 </p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{color: "#ffffff", marginRight: "2rem"}} />+420776889054</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: "#ffffff", marginRight: "2rem"}}  />ua.recowery@gmail.com</h4>
                    </div>
                </div>

            <div className="right">
                <h4>About the company </h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    </p>
                <div className="social">
                    <FaFacebook  size={30} style={{color: "#ffffff", marginRight: "1rem"}} />
                    <FaTwitter  size={30} style={{color: "#ffffff", marginRight: "1rem"}} />
                    <FaLinkedin  size={30} style={{color: "#ffffff", marginRight: "1rem"}} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;