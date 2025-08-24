import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaDatabase, FaLaptopCode } from "react-icons/fa";
// Remove unused import: import { CodeIcon } from "@heroicons/react/solid";

const TechnicalJourney = () => {
    return (
        <div className="journey-section">
            <h1 className="journey-title">Technical Journey</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2024 - Present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">Full Stack Web Development Mastery</h3>
                    <h4 className="vertical-timeline-element-subtitle">Advanced Skill Development</h4>
                    <p>
                        Deepening expertise in full-stack web technologies, focusing on modern frameworks and best practices in software development.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2024"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<FaDatabase />}
                >
                    <h3 className="vertical-timeline-element-title">Backend and Database Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Database Design and Backend Architecture</h4>
                    <p>
                        Advanced learning in database management, backend architecture, and scalable system design with modern technologies.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2023 - 2024"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<FaCode />}
                >
                    <h3 className="vertical-timeline-element-title">Programming Languages and Core Computing</h3>
                    <h4 className="vertical-timeline-element-subtitle">Language Proficiency and Computational Thinking</h4>
                    <p>
                        Strengthening core programming skills in multiple languages, focusing on algorithmic problem-solving and computational thinking.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TechnicalJourney;
