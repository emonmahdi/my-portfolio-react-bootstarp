import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faArchive} from '@fortawesome/free-solid-svg-icons'

const Education = () => {
    return (
        <div id="education-section">
            <hr />
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
                                    <FontAwesomeIcon icon={faArchive} /> 
                                    
	   							</div>
                                <span class="time">2021 -2022 </span>
	   							<h5>Front end Developer <span class="place"> at SagacitiAi</span></h5>
	   							<p>I am a Junior Web Developer at Dreamland It. I have Completed many website developed. And I am a Mern Stack Developer at SagacitiAi. </p> 
                            </li>
                        </ul>
                    </div>
                </Col>    
                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
                                     <FontAwesomeIcon icon={faGraduationCap} />
	   							</div>
                                <span class="time">2014-2018 </span>
	   							<h5>Diploma Computer Technology <span class="place">Patuakhali Polytechnic Institue  </span></h5>
	   							<p>I am Completed Diploma Course on Computer technology at Patuakhali Polytechnic Institute. </p>
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
                                     <FontAwesomeIcon icon={faArchive} />
	   							</div>
                                <span class="time">2018 - 2019</span>
	   							<h5>Support Enginner <span class="place"> at Pandora Technology </span></h5>
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
                                     <FontAwesomeIcon icon={faGraduationCap} />
	   							</div>
                                <span class="time">2019 - Present  </span>
	   							<h5>BSC in CSE <span class="place">University Of Global Village.</span></h5>
	   							<p> I am Graduated in CSE at University of Global Village.</p>
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
                                    <FontAwesomeIcon icon={faArchive} />
	   							</div>
                                <span class="time">2019 - 2020 </span>
	   							<h5>Web Designer  <span class="place"> at SortITPoint</span></h5>
	   							<p>I am a Web desinger. I have already completed lots of project on websites. I can creative design for website. I make any type design website. </p>
                            </li>
                        </ul>
                    </div>
                </Col>  

                <Col xs={12} md={6}>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div class="icon"> 
                                    <FontAwesomeIcon icon={faGraduationCap} />
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