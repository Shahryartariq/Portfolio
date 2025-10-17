import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiBitbucket,
  SiPodman,
  SiGit,
} from "react-icons/si";

function DevOpsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiDocker />
        <p style={{ fontSize: "0.4em" }}>Docker</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiPodman />
        <p style={{ fontSize: "0.4em" }}>Podman</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiJenkins />
        <p style={{ fontSize: "0.4em" }}>Jenkins</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiGit />
        <p style={{ fontSize: "0.4em" }}>Git</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiGithubactions />
        <p style={{ fontSize: "0.4em" }}>GitHub Actions</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiBitbucket />
        <p style={{ fontSize: "0.4em" }}>Bitbucket</p>
      </Col>
    </Row>
  );
}

export default DevOpsStack;
