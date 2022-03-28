import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact-section">
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
                  <i class="fas fa-envelope-open"></i>
                  <h5>Mail ME </h5>
                  <span>emonhowlader1997@gmail.com</span>
                </div>
                <div class="contact-one">
                  <i class="fas fa-phone"></i>
                  <h5>Call ME </h5>
                  <span>01908131513</span>
                </div>
                <div class="social-link">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-dribbble"></i>
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
