import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png"
import logo1 from "../assets/images/aboutimg.png"
import Newsletter from "../shared/Newsletter";
// import Contact from "./Contact";

const About = () => {
  return (
    <><section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"About Us"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Your Trusted Travel {" "}
                <span className="highlight">Partner.</span>
              </h1>
                <p>
                    At The Travelogue, we're a team of passionate travel enthusiasts dedicated to curating unforgettable experiences for fellow adventurers. We believe that travel is more than just visiting places; it's about immersing yourself in different cultures, connecting with locals, and creating memories that will last a lifetime. We strive to provide personalized recommendations, seamless bookings, and exceptional customer service to ensure your journey is as smooth and enjoyable as possible.
                </p>
            </div>
          </Col>
          <div className="about__image d-flex align-items-center">
            <img src={logo1} height={250} width={250} alt="" />
          </div>
        </Row>
      </Container>
    </section>
    {/* <Contact/> */}
    <Newsletter /></>
  );
};

export default About;