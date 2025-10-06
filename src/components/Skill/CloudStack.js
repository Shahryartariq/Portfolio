import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiHeroku, SiNetlify, SiVercel, SiDigitalocean  } from "react-icons/si";

function CloudStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ fontSize: "0.4em" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <p style={{ fontSize: "0.4em" }}>Google Cloud</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p style={{ fontSize: "0.4em" }}>Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{ fontSize: "0.4em" }}>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p style={{ fontSize: "0.4em" }}>Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "0.4em" }}>Vercel</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
        <p style={{ fontSize: "0.4em" }}>DigitalOcean</p>
      </Col>
    
    </Row>
  );
}

export default CloudStack;
