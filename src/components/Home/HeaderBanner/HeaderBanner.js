import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderBanner.css";
import myImg from "../../../images/me.jpg";
import { FaFilePdf, FaUserAlt } from "react-icons/fa";

const HeaderBanner = () => {
  return (
    <div id="headerBanner">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="header-body">
              <div class="header-image">
                <div class="my-img">
                  {/* <!-- <img src="assets/img/me.jpg" alt=""> --> */}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div class="header-text text-start p-5">
              <h5>hi there!</h5>
              <h1>
                I'M <span>Emon Mahdi</span>{" "}
              </h1>
              <p>
                I'm a Bangladesh based web designer &amp; front‑end developer
                focused on crafting clean &amp; user‑friendly experiences, I am
                passionate about building excellent software that improves the
                lives of those around me.
              </p>
              <button className="btn btn-warning me-4">
                <a href="#about-section">
                  More About Me <i><FaUserAlt /></i>
                </a>
              </button>
              <button className="btn btn-warning">
                <a href="https://drive.google.com/file/d/1NNQlJCCv0ETLUzyY-C2qOvIdZH1L4QkN/view" target='_blank'>
                  Dowmload CV<i><FaFilePdf /></i>
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner;
