import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
<Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I’m <b className="purple">Shehryar Tariq</b>, a passionate 
      <b className="purple"> Full-Stack Developer</b> and 
      <b className="purple"> Cybersecurity Analyst</b> who loves solving problems 
      with code.
      <br />
      <br />
      I am fluent in programming languages such as
      <i>
        <b className="purple"> JavaScript, Rust, and C++</b>
      </i>
      , and I enjoy exploring how technology can create meaningful impact.
      <br />
      <br />
      My main areas of interest include building
      <i>
        <b className="purple"> Web Applications and Scalable Products</b>
      </i>{" "}
      as well as working with
      <i>
        <b className="purple"> Blockchain Technologies</b>
      </i>.
      <br />
      <br />
      I also enjoy working with
      <b className="purple"> Node.js</b> and modern JavaScript frameworks like
      <i>
        <b className="purple"> React.js and Next.js</b>
      </i>{" "}
      to craft intuitive and high-performance solutions.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shahryartariq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/M_Shehryartariq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammadshehryartariq/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shahryar.tariq/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
