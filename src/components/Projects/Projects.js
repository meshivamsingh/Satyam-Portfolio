import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Vedios </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Vedios I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="The Mehrangarh Fort"
              description="Mehrangarh Fort, located in Jodhpur, Rajasthan, is one of India's largest and most impressive forts. Built in 1459 by Rao Jodha, it stands majestically atop a 410-foot hill, offering stunning views of the city. The fort features intricate architecture, expansive courtyards, and houses a museum showcasing royal artifacts."
              ghLink="https://www.youtube.com/watch?v=duqP7h0nL_k&ab_channel=S1Vlogs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="The Real Banaras❣️💫|| Dev Deepawali ||Varansi tourist places❣️💫
"
              description="
Experience the magic of Dev Deepawali in Varanasi, where the ghats come alive with thousands of diyas and vibrant celebrations. Explore iconic tourist spots like the Kashi Vishwanath Temple, Sarnath, and the bustling streets filled with local culture. Witness a mesmerizing blend of tradition and spirituality in the heart of Banaras."
              ghLink="https://www.youtube.com/watch?v=gNWlaKhpZBA&ab_channel=S1Vlogs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="India Jeet Gayi Asia Cup🥳 Chalo Chaley Chai Piney ❣️ aur Gurgaon ki wadiyo me 😅😅"
              description="India has won the Asia Cup! 🥳 Time to celebrate with tea and explore the scenic valleys of Gurgaon. Let's enjoy the moment and soak in the victory with some delightful chai and beautiful views. ❣️😅"
              ghLink="https://www.youtube.com/watch?v=0GLZmfN_c38&ab_channel=S1Vlogs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dussehra 2023 Mela in Gurgaon 🥳
"
              description="Celebrate Dussehra 2023 in Gurgaon with vibrant festivities at the Dussehra Mela! Enjoy traditional dance performances, delicious street food, thrilling rides, and a grand display of effigies burning to mark the victory of good over evil. A perfect blend of culture, entertainment, and community spirit awaits! 🎉"
              ghLink="https://www.youtube.com/watch?v=Oo7Vetp_QvU&ab_channel=S1Vlogs"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
