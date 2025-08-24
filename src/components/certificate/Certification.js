import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import infosys from "../../images/9.png";
import tcs from "../../images/1.png";
import accenture from "../../images/4.png";
import deloitte_data from "../../images/3.png";
import deloitte_cyber from "../../images/5.png";
import linkedin_python from "../../images/6.png";
import linkedin_c from "../../images/7.png";
import coursera from "../../images/2.png";
import wadhwani from "../../images/10.png";
import techvision from "../../images/8.png";
import sip from "../../images/SIP.png";
import skillsangam from "../../images/skillsangam.png";

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      image: infosys,
      title: "Software Engineering",
      issuer: "Infosys",
      date: "March 10, 2025"
    },
    {
      image: tcs,
      title: "TCS iON Career Edge - Young Professional",
      issuer: "Tata Consultancy Services",
      date: "August 9, 2025"
    },
    {
      image: accenture,
      title: "Software Engineering Job Simulation",
      issuer: "Accenture",
      date: "July 24, 2025"
    },
    {
      image: deloitte_data,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "July 24, 2025"
    },
    {
      image: deloitte_cyber,
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      date: "July 24, 2025"
    },
    {
      image: linkedin_python,
      title: "Learning Python",
      issuer: "LinkedIn Learning",
      date: "July 10, 2023"
    },
    {
      image: linkedin_c,
      title: "C Programming Basics",
      issuer: "LinkedIn Learning",
      date: "July 11, 2023"
    },
    {
      image: coursera,
      title: "Fundamentals of Network Communication",
      issuer: "University of Colorado",
      date: "June 16, 2024"
    },
    {
      image: wadhwani,
      title: "JobReady Employability Skills",
      issuer: "Wadhwani Foundation",
      date: "June 7, 2024"
    },
    {
      image: techvision,
      title: "TECHVISION-24 Volunteer Certificate",
      issuer: "Sahyadri College of Engineering & Management",
      date: "May 9, 2024"
    },
    {
      image: sip,
      title: "Social Innovation Program",
      issuer: "Technical Career Education",
      date: "August 26, 2023"
    },
    {
      image: skillsangam,
      title: "Skill Sangam 2025 Full Stack Course",
      issuer: "Technical Career Education & Sahyadri College",
      date: "June 3, 2025"
    }
  ];

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleClose = () => {
    setSelectedCert(null);
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certifications</h1>
              </Zoom>
            </Col>
            {certifications.map((cert, index) => (
              <Col md={4} key={index} className="mt-3">
                <Fade bottom duration={2000} distance="20px">
                  <div 
                    className="cert-card" 
                    onClick={() => handleCertClick(cert)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="content">
                      <div className="content-overlay"></div>
                      <div
                        className="cert-header"
                        style={{ backgroundColor: "white" }}
                      >
                        <img 
                          className="logo_img" 
                          src={cert.image} 
                          alt={cert.title} 
                          style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
                        />
                      </div>
                      <div className="content-details fadeIn-top">
                        <h3
                          className="content-title"
                          style={{ color: "black" }}
                        >
                          Certificate
                        </h3>
                      </div>
                    </div>
                    <div className="cert-body">
                      <h2
                        className="cert-body-title"
                        style={{ fontWeight: 700, color: "#fbd9ad" }}
                      >
                        {cert.title}
                      </h2>
                      <h3
                        className="cert-body-subtitle"
                        style={{ color: "#eb90ff", marginBottom: "0px" }}
                      >
                        - {cert.issuer}
                      </h3>
                      <h3
                        className="cert-body-subtitle"
                        style={{ color: "#eb90ff", marginBottom: "0px" }}
                      >
                        {cert.date}
                      </h3>
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Modal for Certificate Image */}
      <Modal 
        show={!!selectedCert} 
        onHide={handleClose} 
        centered 
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={selectedCert?.image} 
            alt={selectedCert?.title} 
            style={{ 
              width: '100%', 
              maxHeight: '70vh', 
              objectFit: 'contain' 
            }} 
          />
        </Modal.Body>
        <Modal.Footer>
          <div style={{ color: "#eb90ff" }}>
            {selectedCert?.issuer} | {selectedCert?.date}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
