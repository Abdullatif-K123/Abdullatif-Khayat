import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import homelogo from "../../Assets/home-man.svg";
import Details from "./Details";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Button from "../Button";
import resume from "../../Assets/Resume.pdf";
import Social from "../About/Social";
import Contact from "./Contact";
const Home = () => {
  const downloadPDF = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Abdullatif's Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <section id="home">
      <Container fluid className="home-section">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ABDULLATIF KHAYAT</strong>
              </h1>
              <div
                className="typeWriter"
                style={{
                  padding: 40,
                  paddingLeft: 45,
                  paddingTop: 10,
                  textAlign: "left",
                }}
              >
                <TypeWriter />
              </div>
              <Button
                href={"#"}
                downloadHandler={downloadPDF}
                className={"resume-btn download"}
                content={"Download my Resume"}
              />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homelogo}
                alt="man using laptop logo"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Details />
      <About />
      <Projects />
      <Social />
      <Contact />
    </section>
  );
};

export default Home;
