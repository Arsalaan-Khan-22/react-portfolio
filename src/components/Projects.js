import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/techundertake-website.png";
import projImg2 from "../assets/img/mentorverse-website.png";
import projImg3 from "../assets/img/personalportfolio-website.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Tech Undertake Portfolio Website",
      imgUrl: projImg1,
    },
    {
      title: "Mentorverse - A Mentorship Platform",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio Website",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few personal and learning projects that showcase my development skills.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} loading="lazy"></img>
    </section>
  )
}

export default Projects