import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Yatin V Bhovi</b> from Ankola, Karnataka, India.<br />
                I am an enthusiastic Full Stack Developer with strong interests in Web Development and algorithmic problem-solving.<br /><br />
                Currently, I am pursuing a <b className="purple">Bachelor of Engineering in Computer Science</b> at <b className="purple">Sahyadri College of Engineering and Management</b>, Mangalore, Karnataka (CGPA: 9.3).<br />
                I completed my Pre-University Course at <b className="purple">Gokhale Centenary Pre-University College</b> (Percentage: 89%).<br /><br />
                I am proficient in programming languages such as <b className="purple">Java, C++, HTML, CSS, JavaScript</b>.<br />
                <br />
                I have experience with developer tools like <b className="purple">VS Code, Git, Postman</b> and frameworks/technologies including <b className="purple">Express.js, React.js, Node.js, MongoDB</b>.<br /><br />
                I am passionate about building web technologies and products, and I enjoy learning new technologies and solving challenging problems.
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
