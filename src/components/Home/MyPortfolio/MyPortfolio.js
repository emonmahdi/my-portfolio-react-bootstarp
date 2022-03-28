import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MyPortfolio.css";
import portfolioOne from '../../../images/p1.png'
import portfolio2 from '../../../images/p2.png'
import portfolio3 from '../../../images/p3.png'
import portfolio4 from '../../../images/p4.png'

const MyPortfolio = () => {
  return (
    <div id="portfolio-section">
      <Container>
        <div class="section-title">
          <h2>
            My <span>Portfolio </span>
          </h2> 
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className="single-image-portfolio">
              <a href="#">
                <img src={portfolio2} className='img-fluid' alt="" />
                <div className="overlay-image">
                    <h3>Smart Camera</h3>
                    <a href="#">Details</a>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="single-image-portfolio">
              <a href="#">
                <img src={portfolio3} className='img-fluid' alt="" />
                <div className="overlay-image">
                    <h3>Smart Camera</h3>
                    <a href="#">Details</a>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="single-image-portfolio">
              <a href="#">
                <img src={portfolioOne} className='img-fluid' alt="" />
                <div className="overlay-image">
                    <h3>Smart Camera</h3>
                    <a href="#">Details</a>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="single-image-portfolio">
              <a href="#">
                <img src={portfolio4} className='img-fluid' alt="" />
                <div className="overlay-image">
                    <h3>Smart Camera</h3>
                    <a href="#">Details</a>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPortfolio;
