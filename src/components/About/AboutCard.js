import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Angela Dsouza</span> from{" "}
            <span className="purple">Mangalore, Karnataka, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">
              Computer Science Engineering student
            </span>{" "}
            at <span className="purple">St. Joseph Engineering College</span>.
            <br />
            I'm working as an intern at{" "}
            <span className="purple">
              National Institute of Technology Karnataka
            </span>{" "}
            as a <span className="purple">REHAB Project Developer</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Keyboard 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
