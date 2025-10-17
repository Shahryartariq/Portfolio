import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNodedotjs,
  SiExpress,
  SiOkta,
  SiOpenai,
  SiRust,
  SiDatabricks,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

function BackendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiNodedotjs />
        <p style={{ fontSize: "0.4em" }}>Node.js</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "0.4em" }}>Express.js</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiOkta />
        <p style={{ fontSize: "0.4em" }}>OAuth 2.0</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaServer />
        <p style={{ fontSize: "0.4em" }}>Secure API Gateways</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiOpenai />
        <p style={{ fontSize: "0.4em" }}>LLM Integrations</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiDatabricks />
        <p style={{ fontSize: "0.4em" }}>Scalable DB Design</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiRust />
        <p style={{ fontSize: "0.4em" }}>Actix (Rust)</p>
      </Col>
    </Row>
  );
}

export default BackendStack;
