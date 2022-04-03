import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div id='footer-section'> 
            <span>
                <hr />
            </span>
            <h2 >
                <a href="#">Developer <span>Emon</span> </a>
            </h2>
            <div class="social-link">
                <a href="https://www.facebook.com/mdemon.mahdi7700/" target='_blank'><FaFacebookF /> </a>
                <a href="https://www.linkedin.com/in/md-emon-howlader-923157160/" target='_blank'><FaLinkedin /></a>
                <a href="https://github.com/emonmahdi" target='_blank'> <FaGithub /></a> 
		    </div>
            
            <p>Copyright &copy; All right reserved MD Emon Mahdi</p>
        </div>
    );
};

export default Footer;