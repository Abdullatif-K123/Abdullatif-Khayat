import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import emotionDetect from "../../Assets/projects/emotion-detect.png";
import chatApp from "../../Assets/projects/chat.png";
import estateApp from "../../Assets/projects/estate.png";
import spotifyApp from "../../Assets/projects/spotify.png";
import ecommerce from "../../Assets/projects/ecommerce.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className=" main-name">Projects I've Worked On Recently</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              title="Chat App"
              description="A real time chat application where you can send messages make a call video & audio with one or many people and you can create a group of people"
              ghLink="https://github.com/Abdullatif-K123/chatApp"
              demoLink="#"
              tools={[
                "React",
                "Firebase",
                "Redux",
                "Html",
                "Css",
                "Javascript",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              title="E-Commerce web application"
              description="an e-commerce website for selling many categories using
ReactJs and Redux it contain a home page where the products show and it has a
filter to filter the products"
              ghLink="https://github.com/Abdullatif-K123/chatApp"
              demoLink="#"
              tools={[
                "React",
                "Firebase",
                "pwa",
                "Graphql",
                "ReduxToolkit",
                "figma",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estateApp}
              title="Modren estate App"
              description="An app to show estate you can search about property and you can dive in property deatail page "
              ghLink="https://github.com/Abdullatif-K123/chatApp"
              demoLink="#"
              tools={["React", "Nextjs", "Chakara UI", "Redux", "Rapid API"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotionDetect}
              title="Emotions detection"
              description="Intelligent technology to detect emotions from
written texts you can detect emotions from comments and article The emotion detection system takes a text string as input and
produces one of the following five emotions: (joy - anger – love
- fear - sadness)"
              ghLink="https://github.com/Abdullatif-K123/chatApp"
              demoLink="#"
              tools={["AI", "ML", "NLP", "Python", "Ontology"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyApp}
              title="Modren player Application"
              description="Music Player application with fully control of player using react js the app contain home page and you can search and choose genra and explore the most popular song based on the location and you can explore a singl song to show full information about the song and more..."
              ghLink="https://github.com/Abdullatif-K123/chatApp"
              demoLink="#"
              tools={["React", "JS", "ReduxToolkit", "tailwindcss"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
