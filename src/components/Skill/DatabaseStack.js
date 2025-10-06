import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiSupabase } from "react-icons/si";

function DatabaseStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "0.4em" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "0.4em" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p style={{ fontSize: "0.4em" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "0.4em" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
        <p style={{ fontSize: "0.4em" }}>Supabase</p>
      </Col>
    </Row>
  );
}

export default DatabaseStack;
