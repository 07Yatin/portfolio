import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import DatabaseIcon from "@mui/icons-material/Storage";
import JavaIcon from "@mui/icons-material/Code";
import NetworkIcon from "@mui/icons-material/NetworkCheck";
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
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
          <h1>Technical Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WebIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Development Mastery
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Advanced Web Technologies Ecosystem
          </h4>
          <p>
            Deepening expertise in modern web development technologies, 
            focusing on creating responsive, scalable, and efficient full-stack 
            web applications using MERN stack and cutting-edge frameworks.
            Developing complex applications with React.js, Node.js, Express.js, 
            and MongoDB integration.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DatabaseIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Backend and Database Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Server-Side Technologies and Data Management
          </h4>
          <p>
            Advanced exploration of server-side programming, database management, 
            and backend architectures. Developing robust backend systems using 
            Node.js, Express.js, and MongoDB. Implementing efficient data 
            models, optimizing database queries, and ensuring scalable 
            application architecture.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavaIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Programming Languages and Core Computing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Language Proficiency and Algorithmic Thinking
          </h4>
          <p>
            Developing strong proficiency in multiple programming languages, 
            with a focus on Java and C++. Building robust problem-solving skills, 
            understanding data structures, and implementing efficient algorithms. 
            Expanding knowledge of object-oriented programming and software design principles.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<NetworkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Technologies Fundamentals
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frontend Development and Web Essentials
          </h4>
          <p>
            Establishing a strong foundation in web technologies, 
            mastering HTML, CSS, and JavaScript. Learning responsive 
            design principles, understanding web standards, and developing 
            interactive and visually appealing web interfaces.
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

export default TechnicalJourney;
