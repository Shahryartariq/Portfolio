import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Shehryar </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
           Full Stack Developer with 3+ years of experience in designing and deploying scalable, secure, and responsive web applications. Proficient in JavaScript, TypeScript, React, Next.js, Vue.js, Node.js, and Rust, with strong expertise in RESTful APIs, cloud platforms (AWS, Azure, GCP), and database design. Skilled in creating responsive, modern UIs using Tailwind CSS, ShadCN, and Material UI, while ensuring performance, security, and scalability across projects.
<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Penetration Testing
            </li>
            <li className="about-activity">
              <ImPointRight /> PC Gamer
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
