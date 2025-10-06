import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import FrontendStack from "./FrontendStack";
import Toolstack from "./Toolstack";
import BlockchainStack from "./BlockchainStack";
import SecurityStack from "./SecurityStack";
import DevOpsStack from "./DevOpsStack";
import CloudStack from "./CloudStack";
import DatabaseStack from "./DatabaseStack";
import BackendStack from "./BackendStack";
import LanguagesStack from "./LanguagesStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

      <h1 className="project-heading">
        <strong className="purple">Programming Languages</strong>
        </h1>

        <LanguagesStack />


        <h1 className="project-heading">
          <strong className="purple">Frontend Development</strong>
        </h1>

        <FrontendStack />


        <h1 className="project-heading">
        <strong className="purple">Backend Development</strong>
        </h1>
        <BackendStack />


        <h1 className="project-heading">
          <strong className="purple">Database</strong>
        </h1>
        <DatabaseStack />



        
        <h1 className="project-heading">
          <strong className="purple">Cloud Platforms</strong>
        </h1>
        <CloudStack />



        <h1 className="project-heading">
          <strong className="purple">DevOps Stack</strong>
        </h1>
        <DevOpsStack />


        <h1 className="project-heading">
          <strong className="purple">Security Stack</strong>
        </h1>
        <SecurityStack />
  

        <h1 className="project-heading">
          <strong className="purple">Blockchain Skills</strong>
        </h1>
        <BlockchainStack />


        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />



        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
