import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MyBlog.css";
import blog1 from "../../../images/js-blog.png";
import blog2 from "../../../images/b2.jpeg";
import blog3 from "../../../images/b3.jpg";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div id="blog-section">
      <hr />
      <Container>
        <div class="section-title">
          <h2>
            My <span>Blogs </span>
          </h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <Col xs={12} md={4}>
              <div class="single-blog">
                <div class="blog-img">
                  <img src={blog.img} className="img-fluid" alt="" />
                </div>
                <a href="#">
                  <h4>{blog.title}</h4>
                </a>
                <p>{blog.description.slice(0, 120)}</p>
                <button className="btn btn-warning d-block mx-auto mb-5">
                  Read More
                </button>
              </div>
            </Col>
          ))}

          {/* <Col xs={12} md={4}>
            <div class="single-blog">
              <div class="blog-img">
                <img src={blog2} className="img-fluid" alt="" />
              </div>
              <a href="#">
                <h4>How to Own Your Audience by Creating an Email List</h4>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div class="single-blog">
              <div class="blog-img">
                <img src={blog3} className="img-fluid" alt="" />
              </div>
              <a href="#">
                <h4>How to Own Your Audience by Creating an Email List</h4>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default MyBlog;
