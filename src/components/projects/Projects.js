import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import donar from "../../images/Donar.png";
import anemia from "../../images/anemia.png";
import gym from "../../images/gym.png";
import booklist from "../../images/booklist.png";
import portfolio from "../../images/portfolio.png";
import jobPortal from "../../images/jobportal.png";
import token from "../../images/token.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: donar,
      title: "DonorShield",
      description: "Developed a full-stack donation platform using the MERN stack integrated with smart contracts to ensure secure and transparent fund management.\n\nEnabled real-time donation tracking for donors, improving trust by providing visibility into how funds are allocated and utilized.\n\nDesigned a smart contract-based disbursal system to automate and enforce fair, tamper-proof distribution of donations to verified beneficiaries.",
      technologies: "MongoDB, Express.js, React.js, Node.js, Solidity, Blockchain",
      link: "https://github.com/07Yatin/DonorShield.git"
    },
    {
      image: anemia,
      title: "Non-Invasive Anemia Detection Through Conjunctival Analysis",
      description: "Developed a non-invasive anemia detection system using conjunctiva images as an alternative to traditional blood tests.\n\nImplemented YOLOv8 for conjunctiva segmentation and an ANN model for hemoglobin level prediction.\n\nEnhanced accuracy using preprocessing techniques like histogram equalization and Gaussian blur.\n\nBuilt a Flask web app for real-time anemia screening with user-uploaded eye images.",
      technologies: "YOLOv8, ANN, Flask, OpenCV",
      link: "https://github.com/07Yatin/Anemiaweb.git"
    },
    {
      image: gym,
      title: "Gym Management System",
      description: "Developed a web-based system to manage gym operations for members, trainers, and administrators.\n\nImplemented modules for user registration, subscriptions, trainer assignments, workout tracking, and feedback.\n\nDesigned a structured MySQL database with linked tables for users, trainers, and membership data.",
      technologies: "MySQL, JavaScript, HTML/CSS, PHP",
      link: "https://github.com/07Yatin/Gym-management.git"
    },
    {
      image: booklist,
      title: "Real-time Book Management System",
      description: "Developed a full-stack web application for managing books with real-time updates.\n\nImplemented role-based access with separate interfaces for Book Readers and Book Owners.\n\nFeatures include real-time book tracking, return date monitoring, favorites system, and efficient search & filter functionality.\n\nUtilized WebSocket communication with Socket.io for live synchronization across users.",
      technologies: "Socket.io, React.js, Node.js, Express.js, JSON Persistence",
      link: "https://github.com/07Yatin/booklist.git"
    },
    {
      image: portfolio,
      title: "Personal Portfolio Website",
      description: "A modern, responsive React-based personal portfolio showcasing professional skills, projects, and achievements.\n\nImplemented dynamic sections with interactive navigation and animated transitions.\n\nUtilized React.js, React Router, and React Bootstrap for a seamless, professional user experience.\n\nIncorporated advanced UI/UX techniques including Lottie animations and typewriter effects.",
      technologies: "React.js, React Router, React Bootstrap, React Reveal, React Icons",
      link: "https://github.com/07Yatin/portfolio.git"
    },
    {
      image: jobPortal,
      title: "Job Portal Web Application",
      description: "Developed a comprehensive full-stack job portal application with role-based access control for job seekers and employers.\n\nImplemented secure user authentication using JWT, with features for job posting, searching, and application management.\n\nCreated dynamic frontend with React and robust backend using Node.js and Express, integrated with MongoDB for data persistence.\n\nAdded advanced features like file upload for resumes, in-app messaging, and responsive design.",
      technologies: "React.js, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios",
      link: "https://github.com/07Yatin/job-portal.git"
    },
    {
      image: token,
      title: "Patient Token Management System",
      description: "Developed a comprehensive web application for healthcare patient check-in and token generation.\n\nImplemented a user-friendly patient check-in form with dynamic doctor availability and intelligent token generation.\n\nIntegrated secure Google Sign-In authentication using Firebase for staff access.\n\nCreated a decoupled full-stack application with React frontend and Node.js/Express backend, utilizing MongoDB for data persistence.",
      technologies: "React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Axios",
      link: "https://github.com/07Yatin/patient-token-management.git"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
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
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Fade bottom>
                  <div 
                    className="singleProject" 
                    style={{ 
                      backgroundColor: "rgb(142 70 186 / 31%)", 
                      border: "1px solid",
                      cursor: 'pointer'
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="projectContent">
                      <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                      <img src={project.image} alt={project.title} />
                      <div className="project--showcaseBtn">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className={"iconBtn"} 
                          aria-labelledby={`code`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaCode id={`code`} className={"icon"} aria-label="Code" />
                        </a>
                      </div>
                    </div>
                    <h6>
                      <p 
                        className="project--desc" 
                        style={{ 
                          background: "#fbd9ad", 
                          color: "#b061df", 
                          fontWeight: 600 
                        }}
                      >
                        {project.description.length > 200 
                          ? project.description.substring(0, 200) + '...' 
                          : project.description}
                      </p>
                    </h6>
                    <div 
                      className="project--lang" 
                      style={{ 
                        background: "#fbd9ad", 
                        color: "#b061df", 
                        fontWeight: 600 
                      }}
                    >
                      {project.technologies}
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>

      {/* Project Details Modal */}
      <Modal 
        show={!!selectedProject} 
        onHide={handleClose} 
        centered 
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img 
                src={selectedProject?.image} 
                alt={selectedProject?.title} 
                style={{ 
                  width: '100%', 
                  maxHeight: '300px', 
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }} 
              />
            </Col>
            <Col md={6}>
              <h4 style={{ color: "#fbd9ad" }}>Project Description</h4>
              <p style={{ color: "#b061df" }}>{selectedProject?.description}</p>
              <h4 style={{ color: "#fbd9ad", marginTop: '15px' }}>Technologies Used</h4>
              <p style={{ color: "#b061df" }}>{selectedProject?.technologies}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={handleClose}
          >
            Close
          </Button>
          <Button 
            variant="primary" 
            href={selectedProject?.link} 
            target="_blank"
          >
            View on GitHub
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
