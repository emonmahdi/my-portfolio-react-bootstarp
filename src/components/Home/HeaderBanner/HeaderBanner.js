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
                I'M <span>Emon Howlader</span>{" "}
              </h1>
              <p>
                Hello, I'm Md Emon, a passionate web developer, enthusiastic and
                self-motivated with excellent knowledge and experience. I have
                hands-on experience in front-end development using HTML, CSS,
                and JavaScript, with a focus on building responsive and
                user-friendly interfaces. Additionally, I am proficient in
                React,Next.js for building modern web applications. I graduated
                with a degree in Computer Science and Engineering, where I
                gained a solid understanding of fundamental programming concepts
                and web development technologies. I believe in the power of
                continuous learning, and I actively stay updated with the latest
                trends and advancements in the web development industry.
              </p>
              <button className="btn btn-warning me-4">
                <a href="#about-section">
                  More About Me{" "}
                  <i>
                    <FaUserAlt />
                  </i>
                </a>
              </button>
              <button className="btn btn-warning">
                <a
                  href="https://drive.google.com/file/d/1sR45B_pOXItu3n3U8dBGCY3s_lA8N9tZ/view?usp=drive_link"
                  target="_blank"
                >
                  Download Resume
                  <i>
                    <FaFilePdf />
                  </i>
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
