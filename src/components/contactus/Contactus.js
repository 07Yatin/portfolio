import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contactus = () => {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          <Col md={12} className="contact-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Feel Free to <span className="yellow">Connect</span>
            </h1>
            <p className="contact-body">
              Whether you want to discuss a project, collaborate, or just say hi, 
              my inbox is always open. I'll do my best to get back to you!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="contact-social">
            <div className="contact-links">
              <a
                href="https://github.com/07Yatin"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yatin-bhovi-85b63126a/"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="contact-form">
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
              />
              <textarea 
                placeholder="Your Message" 
                required 
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contactus;
