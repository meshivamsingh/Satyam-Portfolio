import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with civil engineering and have gained substantial knowledge and hands-on experience in this field.. 🤷‍♂️
              <br />
              <br /> I’m also passionate about leveraging the latest engineering software tools like..
              <i>
                <b className="purple"> AutoCAD, Revit and STAAD Pro. </b>
              </i>
              <br />
              <br />
              My field of interest lies in &nbsp;
              <i>
                <b className="purple">Designing </b> and
                also in areas related to{" "}
                <b className="purple">
                constructing sustainable infrastructure
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my skills to real-world projects, ensuring that I contribute to the creation of , eco-friendly,  <b className="purple">reliable, eco-friendly</b> and
              <i>
                <b className="purple">
                  {" "}
                safe structures.                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://youtube.com/@vlogswiths1?si=-x4NmHm-TmC8IAqE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
          
               
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mesatyamsingh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mesatyam.singh?igsh=MXZobTk3aXp1NTdtYw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
