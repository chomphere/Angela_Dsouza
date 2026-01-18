import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ flex: 1 }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="SafeEats"
              description="AI-powered web application built with React, Node.js, and Tesseract OCR to detect allergens from ingredient labels. Features an OCR pipeline to extract text and an NLP workflow integrated with MongoDB to accurately identify and alert users about potential allergens."
              ghLink="https://github.com/chomphere/SafeEats"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HearWell"
              description="Android application developed using Kotlin and Firebase that converts microphone audio into hearing-aid–readable audiograms. Supports real-time audio processing and audiogram generation using Superpowered and AudioTrack to improve accessibility for users with hearing impairments."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="Fake Review Detector"
              description="This project aims to build a secure review system that guarantees every review is genuine, verified, and trustworthy—by combining cryptography, AI detection, and platform-level validation."
              ghLink="https://github.com/chomphere/Fake-review-detector"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Book Management System"
              description="Full-stack book management application built with React and Express.js featuring CRUD operations with validation. Includes RESTful API design, API testing using Postman, and unit testing with Cypress to ensure reliability and correctness."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="VR Games (Unity)"
              description="Built VR educational games using Unity, focusing on immersive visuals and interactive learning. Worked extensively with lighting, Shader Graphs, and Visual Effect Graphs to create engaging, high-performance VR environments that enhance the educational experience."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
