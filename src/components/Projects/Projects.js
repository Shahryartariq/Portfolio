import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NFT_Marketplace from "../../Assets/Projects/NFT Marketplace.png";
import NFT_Inscription from "../../Assets/Projects/NFT Inscription.png";
import MonorepoImage from "../../Assets/Projects/Monorepo Architecture.png";
import SubstrateImage from "../../Assets/Projects/Web3 Frontend Integration with Substrate Blockchain.png";
import ShariyahImage from "../../Assets/Projects/Shariyah Review Bureau.png";





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
              imgPath={ShariyahImage}
              isBlog={false}
              title="Shariyah Review Bureau"
              description="Developed secure legal workflow tools for Shariyah Review Bureau using Vue, Rust Actix, Microsoft Graph, and MongoDB. Built REST APIs for structured document generation, digital signatures, and signature workflows, implemented fine-grained ACLs and robust PII protection, and automated deployments and infrastructure management using Jenkins, Docker, Podman, and shell scripts on DigitalOcean."
              ghLink="https://github.com/Shahryartariq"
              demoLink="https://shariyah.net/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFT_Inscription}
              isBlog={false}
              title="Bitcoin NFT Inscription "
              description="Developed a scalable Web3 platform for Bitcoin NFT inscription with Next.js, Node.js, Firebase, and Supabase, implementing secure authentication, multi-wallet connectivity, and optimized CI/CD pipelines."
              ghLink="https://github.com/Shahryartariq"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFT_Marketplace}
              isBlog={false}
              title="NFT Marketplace"
              description="Worked on a decentralized NFT marketplace and rewards platform, focusing on improving platform stability and reliability. Developed custom React hooks to optimize wallet connectivity and data flow, implemented comprehensive backend test cases to ensure secure API workflows, and collaborated on UI–backend integration for a seamless user experience."
              ghLink="https://github.com/Shahryartariq"
              demoLink=""
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MonorepoImage}
              isBlog={false}
              title="Monorepo Architecture"
              description="Designed and implemented a scalable Next.js multi-zone microfrontend architecture for a decentralized ecosystem. Leveraged Turborepo for efficient build orchestration, dependency management, and CI/CD optimization, while standardizing the monorepo structure to enhance scalability, maintainability, and developer onboarding across multiple teams."
              ghLink="https://github.com/Shahryartariq"
              demoLink=""
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SubstrateImage}
              isBlog={false}
              title="Substrate Blockchain Integration"
              description="Developed and optimized React frontends for seamless interaction with Substrate-based blockchain networks, integrating frontend components with Rust-based Substrate modules. Implemented Web3 connectivity using gRPC to ensure secure and efficient communication between the frontend and blockchain nodes."
              ghLink="https://github.com/Shahryartariq"
              demoLink=""
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
