import React, { useEffect, useState } from "react";
import "./Skills.css";
import html from "../../../images/html5.png";
import css from "../../../images/css3.png";
import js from "../../../images/javascript.png";
import react from "../../../images/react.png";
import typescript from "../../../images/typescript.png";
import node from "../../../images/nodejs.png";
import mongodb from "../../../images/mongodb.png";
import next from "../../../images/next-js.png";
import redux from "../../../images/redux.png";
import ant from "../../../images/ant.png";
import firebase from "../../../images/firebase.png";
import express from "../../../images/express.png";
import bootstrap from "../../../images/bootstrap.png";

const Skills = () => {
   
  return (
    <div id="skills-section">
      <div class="section-title">
        <h2>
          My <span>Skills </span>
        </h2>
      </div>
      <div className="skills-body">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={html}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={css}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={js}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={react}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={typescript}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={node}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={mongodb}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={next}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={redux}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={ant}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={firebase}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-skill">
                <img
                  src={bootstrap}
                  width="80px"
                  height="auto"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
