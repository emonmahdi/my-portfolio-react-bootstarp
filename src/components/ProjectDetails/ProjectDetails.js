
import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Navigation from "../Home/Navigation/Navigation";
import './ProjectDetails.css'


const ProjectDetails = () => {
  const { Id } = useParams();
  const [singleDetails, setSingleDetails] = useState([]);
  const [getDetails, setGetDetails] = useState({});

  useEffect(() => {
    fetch("../projects.json")
      .then((res) => res.json())
      .then((data) => setSingleDetails(data));
  }, []);

  useEffect(() => {
    const details = singleDetails.find((td) => td?.id == Id);
    setGetDetails(details);
  }, [singleDetails]);

  return (
    <>
      <Navigation /> 
    <div id='project-details'>
    <Container> 
      <Row>
        <Col xs={12} md={6}>
          <div className="slider">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={getDetails?.subImg1}
                  alt="First slide"
                />
                <Carousel.Caption>
                <h3>{getDetails?.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={getDetails?.subImg2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h3>{getDetails?.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={getDetails?.subImg3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>{getDetails?.name}</h3> 
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <p className="text-start text-light my-4">{getDetails?.description}</p>
            <div className="buttons"> 
                <a  href={getDetails?.clientCodeLink} className='btn btn-primary me-2' target='_blank'> 
                     Client Code
                </a> 
                <a href={getDetails?.serverCodeLink} className='btn btn-warning me-2' target='_blank'> 
                     Server Code Link
                </a> 
                <a href={getDetails?.liveLink} className='btn btn-success' target='_blank'> 
                     Live Link
                </a> 
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
            <div className="project-details-content text-light text-start">
                <h3>{getDetails?.name}</h3>
                <h5 className="mt-5">Key Features: </h5>
                <p>{getDetails?.features?.map(feature => <li>{feature.title}</li>)}</p> 
                <h5 className="mt-5">Technologies: </h5>
                <p>{getDetails?.languages?.map(lang => <li>{lang.name}</li>)}</p> 
            </div>
        </Col>
      </Row> 
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default ProjectDetails;
