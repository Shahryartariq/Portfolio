import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import { TbSquareRoundedLetterS } from "react-icons/tb"; // placeholder for ShadCN

function FrontendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaReact />
        <p style={{ fontSize: "0.4em" }}>React</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaVuejs />
        <p style={{ fontSize: "0.4em" }}>Vue.js</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: "0.4em" }}>Next.js</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaBootstrap />
        <p style={{ fontSize: "0.4em" }}>Bootstrap</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: "0.4em" }}>Tailwind CSS</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <TbSquareRoundedLetterS />
        <p style={{ fontSize: "0.4em" }}>ShadCN</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaHtml5 />
        <p style={{ fontSize: "0.4em" }}>HTML5</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaCss3Alt />
        <p style={{ fontSize: "0.4em" }}>CSS3</p>
      </Col>
    </Row>
  );
}

export default FrontendStack;
