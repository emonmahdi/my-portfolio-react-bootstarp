import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Contact.css'
import { FaFacebookF, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-section">
      <hr />
      <Container>
        <div class="section-title">
          <h2>
          GET IN <span> TOUCH</span>{" "}
          </h2>
        </div>
        <Row>
          <Col xs={12} md={4}>
            <div className="contact-address text-start text-light">
              <h3>DON'T BE SHY !</h3>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div class="contact">
                <div class="contact-one">
                  <FaEnvelope />
                  <div className="ms-4 my-2">
                    <h5>Mail ME </h5>
                    <span>emonhowlader1997@gmail.com</span>
                  </div>
                  
                </div>
                <div class="contact-one">
                  <FaPhone />
                  <div className="ms-4 my-2">
                    <h5>Call ME </h5>
                    <span>01908131513</span>
                  </div>
                  
                </div>
                <div class="social-link">
                  <a href="https://www.facebook.com/mdemon.mahdi7700/">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.linkedin.com/in/md-emon-howlader-923157160/">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/emonmahdi">
                    <FaGithub />
                  </a> 
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8}>
              <div className="contact-form">
              <form action="">
				 		<div class="name-box">  
                            <input type="text" className='form-control mb-4' placeholder="Your Name" />  
                            <input type="text" className='form-control mb-4' placeholder="Your Email" />  
                            <input type="text" className='form-control mb-4' placeholder="Your Subject" />   
				 		</div>
				 		<textarea className='form-control mb-4' placeholder="Your Message"></textarea>
				 		<div class="submit-btn"> 
                            <input type="submit" value="Send Message" /> 
						</div>
				 	</form>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
