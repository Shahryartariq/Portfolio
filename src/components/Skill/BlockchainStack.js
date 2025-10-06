import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiBitcoin,
  SiEthereum,
  SiPolkadot,
  SiHyperledger,
  SiSolidity,
} from "react-icons/si";
import {
  TbBrandReactNative, // used as placeholder for Hardhat
  TbBrandJavascript, // placeholder for Ethers.js
  TbHexagonLetterT,  // placeholder for Truffle
} from "react-icons/tb";
import { FaMask } from "react-icons/fa"; // used as placeholder for MetaMask
import { VscDebugAlt } from "react-icons/vsc"; // placeholder for Ganache
import { DiJavascript1 } from "react-icons/di"; // placeholder for Web3.js

function BlockchainStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitcoin />
        <p style={{ fontSize: "0.4em" }}>Bitcoin</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
        <p style={{ fontSize: "0.4em" }}>Ethereum</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPolkadot />
        <p style={{ fontSize: "0.4em" }}>Substrate</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHyperledger />
        <p style={{ fontSize: "0.4em" }}>Hyperledger</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <p style={{ fontSize: "0.4em" }}>Solidity</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <p style={{ fontSize: "0.4em" }}>Hardhat</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.4em" }}>Web3.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandJavascript />
        <p style={{ fontSize: "0.4em" }}>Ethers.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbHexagonLetterT />
        <p style={{ fontSize: "0.4em" }}>Truffle</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <VscDebugAlt />
        <p style={{ fontSize: "0.4em" }}>Ganache</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaMask />
        <p style={{ fontSize: "0.4em" }}>MetaMask</p>
      </Col>
    </Row>
  );
}

export default BlockchainStack;
