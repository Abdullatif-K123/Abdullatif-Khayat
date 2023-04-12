import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
const About = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          <strong className="main-name">Technologies</strong> I'm Very Good At
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
};

export default About;
