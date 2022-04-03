import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MyPortfolio.css";
import portfolioOne from '../../../images/p1.png'
import portfolio2 from '../../../images/p2.png'
import portfolio3 from '../../../images/p3.png'
import portfolio4 from '../../../images/p4.png'
import { Link } from "react-router-dom";

const MyPortfolio = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects.id)
    useEffect(() => {
      fetch('../projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);


  return (
    <div id="portfolio-section">
      <hr />
      <Container>
        <div class="section-title">
          <h2>
            My <span>Portfolio </span>
          </h2> 
        </div>
        <Row>
          {projects.map(project =>  (<Col xs={12} md={6} key={project.id} project={project}>
            <div className="single-image-portfolio"> 
                <img src={project?.primaryImg} className='img-fluid' alt="" />
                <div className="overlay-image">
                    <h3>{project?.name}</h3> 
                    <div className='links-portfolio'>
                       <Link to={`/project/${project.id}`}>Details</Link> 
                       <a href={project.liveLink} target='_blank'>Live Link</a>
                    </div>
                    
                </div> 
            </div>
          </Col>))}
          
          {/* <Col xs={12} md={6}>
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
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default MyPortfolio;
