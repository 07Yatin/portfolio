import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import WebIcon from "@mui/icons-material/Web";
import BlockchainIcon from "@mui/icons-material/AccountBalance";
import HealthIcon from "@mui/icons-material/LocalHospital";
import CodeIcon from "@mui/icons-material/Code";
import Flip from "react-reveal/Flip";

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Project Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<HealthIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Patient Token Management System
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Healthcare Technology Innovation
          </h4>
          <p>
            Developed a comprehensive web application for healthcare patient 
            check-in and token generation. Implemented secure authentication, 
            dynamic doctor availability, and intelligent token generation 
            using modern web technologies.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<BlockchainIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            DonorShield Blockchain Platform
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Blockchain for Social Impact
          </h4>
          <p>
            Created a full-stack donation platform using MERN stack and 
            blockchain technology. Implemented smart contracts to ensure 
            transparent and secure fund management with real-time tracking 
            and automated distribution mechanisms.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WebIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Job Portal Web Application
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Employment Ecosystem Development
          </h4>
          <p>
            Developed a comprehensive job portal with role-based access control, 
            secure authentication, and advanced features like resume upload 
            and in-app messaging. Utilized modern web technologies to create 
            a seamless job-seeking experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Continuous Learning and Innovation
          </h4>
          <p>
            Focused on developing diverse full-stack web applications, 
            demonstrating proficiency in MERN stack, blockchain integration, 
            and solving real-world problems through technology.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
