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
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Krypt"
              description="Executed project to facilitate seamless ether exchange, message and keyword for giphy using blockchain."
              ghLink="https://github.com/smraddhi18/Krypt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Uniswap Token Marketplace"
              description="Managed two contracts - Custom Token and Custom Dex, showcasing expertise in blockchain development. Developed frontend using reactjs"
              ghLink="https://github.com/smraddhi18/TokenSwapping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NFT-MarketPlace"
              description="Developed and deployed a decentralized NFT marketplace smart contract on Ethereum using Solidity."
              ghLink="https://github.com/smraddhi18/NFTMarketplace"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
