import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Card.Title className="purple">{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>
        {props.isBlog ? (
          <Button
            style={{ marginTop: 15 }}
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> GitHub
          </Button>
        ) : null}
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
