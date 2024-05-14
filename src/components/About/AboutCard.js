import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Tien Dat </span>
            from <span className="purple"> Nanyang Technological University, Singapore. </span> 
            <br />
            I am currently a 3rd year student at NTU, doing a double degree in Computer Science and Economics, with a minor in Modern Languages.
            <br />
            I'm specializing in AI and Cybersecurity. 
            <br />
            <br />
            Apart from full stack development, some other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Water polo
            </li>
            <li className="about-activity">
              <ImPointRight /> Canoe polo
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Horror Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Use AI as a tool, not a threat to mankind. "{" "}
          </p>
          <footer className="blockquote-footer">Tien Dat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
