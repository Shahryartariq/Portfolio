import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython, FaJava, FaPhp } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiRust,
  SiSolidity,
} from "react-icons/si";

function LanguagesStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiJavascript />
        <p style={{ fontSize: "0.4em" }}>JavaScript</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "0.4em" }}>TypeScript</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaPython />
        <p style={{ fontSize: "0.4em" }}>Python</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiRust />
        <p style={{ fontSize: "0.4em" }}>Rust</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiCplusplus />
        <p style={{ fontSize: "0.4em" }}>C++</p>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
        <p style={{ fontSize: "0.4em" }}>PHP</p>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <p style={{ fontSize: "0.4em" }}>Solidity</p>
      </Col> */}
    </Row>
  );
}

export default LanguagesStack;
