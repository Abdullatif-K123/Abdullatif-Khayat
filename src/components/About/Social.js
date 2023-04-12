import React from "react";
import { Container, Col } from "react-bootstrap";

import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
const Social = () => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <Col md={12} className="home-about-social">
        <h1>Wanna Find me?</h1>
        <p>
          Feel free to <span className="purple">connect</span> with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/Abdullatif-K123"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/abdullatifkhayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="#random"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaStackOverflow />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="#random"
              target=""
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillFacebook />
            </a>
          </li>
        </ul>
      </Col>
    </Container>
  );
};

export default Social;
