import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { BiCodeAlt } from "react-icons/all";
const ProjectCard = (props) => {
  const [showMore, setShowMore] = useState(false);
  const description = props.description;
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        {showMore ? (
          <Card.Text style={{ textAlign: "center" }}> {description}</Card.Text>
        ) : (
          <Card.Text style={{ textAlign: "center" }}>
            {" "}
            {description.slice(0, 50)}...{" "}
            <button
              className="showMorebtn"
              onClick={() => {
                setShowMore(true);
              }}
            >
              more
            </button>{" "}
          </Card.Text>
        )}

        <div className="project_tools">
          <h5 className="main-name tool_heading">Built Using</h5>
          <div className="tools">
            {props.tools.map((tool) => {
              return <span className="single_tool">{tool}</span>;
            })}
          </div>
        </div>
        <div className="code_project">
          <a
            href={props.ghLink}
            traget="_blank"
            rel="noopener noreferrer"
            className="button_code"
          >
            &nbsp;
            <BiCodeAlt />{" "}
          </a>

          {"\n"}
          {"\n"}
          {props.demoLink && (
            <a
              href={props.demonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button_code"
            >
              &nbsp;
              {"Demo"}
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
