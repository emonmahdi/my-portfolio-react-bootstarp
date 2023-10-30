import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_macvirw",
        "template_s3ipse9",
        form.current,
        "GYGft4Pf0HT4r9pwC"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your email has been sent successfully.",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              <form ref={form} onSubmit={sendEmail}>
                <div class="name-box">
                  <input
                    type="text"
                    name="from_name"
                    className="form-control mb-4"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    name="from_email"
                    className="form-control mb-4"
                    placeholder="Your Email"
                  />
                </div>
                <textarea
                  className="form-control mb-4"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
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
