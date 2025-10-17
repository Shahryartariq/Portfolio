import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTypescript,
  SiJest,
  SiPostman,
  SiSwagger,
  SiEslint,
  SiJirasoftware,
} from "react-icons/si";
import { FaDizzy } from "react-icons/fa"; // placeholder for Doppler

function ToolsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "0.4em" }}>TypeScript</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiJest />
        <p style={{ fontSize: "0.4em" }}>Jest</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaDizzy />
        <p style={{ fontSize: "0.4em" }}>Doppler</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "0.4em" }}>Postman</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiSwagger />
        <p style={{ fontSize: "0.4em" }}>Swagger</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiEslint />
        <p style={{ fontSize: "0.4em" }}>ESLint</p>
      </Col>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiJirasoftware />
        <p style={{ fontSize: "0.4em" }}>Jira</p>
      </Col>
    </Row>
  );
}

export default ToolsStack;
