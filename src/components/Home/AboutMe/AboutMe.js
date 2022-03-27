import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutMe.css'


const AboutMe = () => {
    return (
        <div id="about-section">
            <hr /> 
            <Container>
                <div class="section-title">
                    <h2>About <span>Me </span></h2>
                    {/* <h4>Resume </h4> */}
                </div>
                <Row>
                    <Col md={6} xs={12}>
                        <Row>
                             <h3 className='text-white my-4'>My Personal Infos</h3>
                            <Col md={6} xs={12}>
                                <div className="details-one">
                                    <ul>
                                        <li>First Name: <span>Md Emon</span> </li><br />
                                        <li>Last Name: <span>Mahdi</span> </li><br />
                                        <li>Age: <span>24y</span></li><br />
                                        <li>Nationality: <span>Bangladeshi</span></li><br />
                                        <li>Study: <span>Avaiable</span></li><br />
                                    </ul> 
                                </div>
                            </Col>
                            <Col md={6} xs={12}> 
                                <div className="details-two">
                                    <ul>
                                        <li>Address: <span>Barishal Sador</span> </li><br />
                                        <li>Phone: <span>01908131513</span> </li><br />
                                        <li>Email: <span>emonhowlader1997@gmail.com</span></li><br />
                                        <li>Skype: <span>Md Emon Howlader </span></li><br />
                                        <li>Language: <span>Bangla and English</span></li><br />
                                    </ul>  
                                </div>
                            </Col>
                        </Row>
                         
                    </Col>
                    <Col md={6} xs={12}>
                         <Row>
                             <Col xs={12} md={6}>
                                 <div className="complete-Box">
                                     <span>2+</span>
                                     <hr />
                                     <h4>Years Of Experience</h4>
                                 </div>
                             </Col>
                             <Col xs={12} md={6}>
                                 <div className="complete-Box">
                                     <span>20+</span>
                                     <hr />
                                     <h4>Complete Projects</h4>
                                 </div>
                             </Col>
                         </Row>
                         <Row>
                             <Col xs={12} md={6}>
                                 <div className="complete-Box">
                                     <span>5+</span>
                                     <hr />
                                     <h4>Happy Customer</h4>
                                 </div>
                             </Col>
                             <Col xs={12} md={6}>
                                 <div className="complete-Box">
                                     <span>6000+</span>
                                     <hr />
                                     <h4>Works Hours</h4>
                                 </div>
                             </Col>
                         </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;