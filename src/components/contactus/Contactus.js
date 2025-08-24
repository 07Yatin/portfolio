import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);

      alert("Backend Server was not Running while submitting the form.");
    }

    setFormData({});
  };

  return (
    <div>
      <Container fluid className="contact-section" id="contact">
        <Container>
          <Row>
            <Col
              md={12}
              className="contact-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="contactme-heading">Contact Me</h1>
              </Zoom>
            </Col>
            <Col md={5}>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-message"
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="submit-btn">
                    <button type="submit" className="submitBtn">
                      Send
                      <AiOutlineSend className="send-icon" />
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={7}>
              <div className="contacts-details">
                <a
                  href={`mailto:yatinbhovi14@gmail.com`}
                  className="personal-details"
                >
                  <div className="detailsIcon">
                    <FiAtSign />
                  </div>
                  <p style={{ color: "#fbd9ad" }}>
                    yatinbhovi14@gmail.com
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
