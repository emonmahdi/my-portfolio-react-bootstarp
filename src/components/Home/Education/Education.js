import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './education.css'


const Education = () => {
    return (
        <div id="education-section">
            <Container>
            <div class="section-title">
   			    <h2>Experience  &amp; <span> Education</span> </h2>
   		    </div>
            <Row> 
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
	   								<i class="fas fa-briefcase"></i>
	   							</div>
                                <span class="time">2020 - Present </span>
	   							<h5>web developer <span class="place">Dreamland It  </span></h5>
	   							<p>I am a Junior Web Developer at Dreamland It. I have Completed many website developed. And I am a Wordpress Developer at Fiverr. </p> 
                            </li>
                        </ul>
                    </div>
                </Col>    
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
	   								<i class="fas fa-briefcase"></i>
	   							</div>
                                <span class="time">2019 - 2020 </span>
	   							<h5>web Designer  <span class="place">Creative It</span></h5>
	   							<p>I am a Web desinger. I have already completed lots of project on websites. I can creative design for website. I make any type design website. </p>
                            </li>
                        </ul>
                    </div>
                </Col>    
            </Row> 
            <Row> 
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
	   								<i class="fas fa-briefcase"></i>
	   							</div>
                                <span class="time">2018 - 2019</span>
	   							<h5>Support Enginner <span class="place">Pandora Technology </span></h5>
	   							<p>I am a network support engineer. I was a support engineer on Padora Technology. </p>
                            </li>
                        </ul>
                    </div>
                </Col>    
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
	   								<i class="fas fa-briefcase"></i>
	   							</div>
                                <span class="time">2019 - Present  </span>
	   							<h5>CSE <span class="place">University Of Global Village  </span></h5>
	   							<p>I Still now a computer science engineering student. I already completed 4th semister. And I am learing programming languages. </p>
                            </li>
                        </ul>
                    </div>
                </Col>    
            </Row> 
            <Row> 
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
	   								<i class="fas fa-briefcase"></i>
	   							</div>
                                <span class="time">2014-2018 </span>
	   							<h5>Diploma Computer Technology <span class="place">Patuakhali Polytechnic Institue  </span></h5>
	   							<p>I am Completed Diploma Course on Computer technology at Patuakhali Polytechnic Institute. </p>
                            </li>
                        </ul>
                    </div>
                </Col>    
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
	   								<i class="fas fa-briefcase"></i>
	   							</div>
                                <span class="time">2014 </span>
	   							<h5>SSC <span class="place">Nooria Secondary High School, Barisal  </span></h5>
	   							<p>I Completed SSC at Barishal Sador. I Passed SSC and My result 4.75</p>
                            </li>
                        </ul>
                    </div>
                </Col>    
            </Row> 
            </Container>  
        </div>
    );
};

export default Education;