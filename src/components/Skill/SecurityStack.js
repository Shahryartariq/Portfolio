import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiOpenaccess,
  SiDatadog,
  SiOkta,
  SiCloudflare,
  SiVault,
  SiSnyk,
} from "react-icons/si";
import { FaLock, FaKey, FaUserShield, FaUserLock } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { TbActivityHeartbeat, TbKey } from "react-icons/tb";

function SecurityStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiOpenaccess />
        <p style={{ fontSize: "0.4em" }}>OWASP</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <TbKey />
        <p style={{ fontSize: "0.4em" }}>Encryption</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiDatadog />
        <p style={{ fontSize: "0.4em" }}>Secure Logging</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaKey />
        <p style={{ fontSize: "0.4em" }}>Clerk</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaUserLock />
        <p style={{ fontSize: "0.4em" }}>Authentication</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaUserShield />
        <p style={{ fontSize: "0.4em" }}>Authorization</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiCloudflare />
        <p style={{ fontSize: "0.4em" }}>Cloudflare Security</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <SiJsonwebtokens />
        <p style={{ fontSize: "0.4em" }}>JWT</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <FaLock />
        <p style={{ fontSize: "0.4em" }}>TLS Setup</p>
      </Col>

      <Col xs={5} sm={5} md={3} lg={3} xl={2} className="tech-icons">
        <TbActivityHeartbeat />
        <p style={{ fontSize: "0.4em" }}>Rate Limiting</p>
      </Col>
    </Row>
  );
}

export default SecurityStack;
