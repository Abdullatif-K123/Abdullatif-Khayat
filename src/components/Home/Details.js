import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myIcon from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
const Details = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I love everything realted to programming and learnt so many
              things, and I like to spend my day in front of my computer <br />
              <br />
              I'm expierence in many tecnologies such as:
              <i>
                <b className="purple">
                  {" "}
                  JAVASCRIPT, HTML, CSS, REACTjs, Redux, and NEXTJS
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
                and I'm also interest in
                <b className="purple">
                  {" "}
                  Backend development and Blockchain technology
                </b>
              </i>
              <br />
              <br />
              I'm passionate about staying up-to-date with the latest web
              technologies and trends, and I'm always looking for new challenges
              to help me grow as a<b className="purple"> developer</b>.
            </p>
          </Col>

          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myIcon} alt="avatar" className="img-fluid " />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Details;
