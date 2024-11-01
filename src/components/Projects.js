import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/31.png";
import projImg3 from "../assets/img/32.png";
import projImg6 from "../assets/img/33.png";
import projImg7 from "../assets/img/34.png";
import projImg8 from "../assets/img/35.png";
import projImg9 from "../assets/img/36.png";
import projImg5 from "../assets/img/37.png";
import projImg4 from "../assets/img/38.png";
import projImg10 from "../assets/img/39.png";
import projImg11 from "../assets/img/40.png";
import projImg12 from "../assets/img/41.png";
import projImg13 from "../assets/img/42.png";
import projImg14 from "../assets/img/43.png";
import projImg15 from "../assets/img/44.png";
import projImg16 from "../assets/img/45.png";
import projImg17 from "../assets/img/46.png";
import projImg18 from "../assets/img/47.png";
import projImg19 from "../assets/img/48.png";
import ems1 from "../assets/img/ems1.png";
import ems2 from "../assets/img/ems2.png";
import ems3 from "../assets/img/ems3.png";
import ems4 from "../assets/img/ems4.png";
import ems5 from "../assets/img/ems5.png";
import ems6 from "../assets/img/ems6.png";
import ems7 from "../assets/img/ems7.png";
import ems8 from "../assets/img/ems8.png";
import ems9 from "../assets/img/ems9.png";
import ems10 from "../assets/img/ems10.png";
import atn1 from "../assets/img/atn1.png";
import atn2 from "../assets/img/atn2.png";
import atn3 from "../assets/img/atn3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "OBSIDIAN RCM  ",
      description: "Medical Billing Application",
      imgUrl: projImg1,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg3,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg6,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg7,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg8,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg9,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg5,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg4,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg10,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg12,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg13,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg11,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg14,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg15,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg16,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg17,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg18,
    },
    {
      title:"OBSIDIAN RCM",
      description: "Medical Billing Application",
      imgUrl: projImg19,
    },
  
  ];

  const emsProjects = [
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems1,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems2,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems3,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems4,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems5,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems6,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems7,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems8,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems9,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems10,
    },
  ];

  const atnProjects = [
    {
      title: "AMS ",
      description: "Attendance Management System",
      imgUrl: atn1,
    },
    {
      title: "AMS ",
      description: "Attendance Management System",
      imgUrl: atn2,
    },
    {
      title: "AMS ",
      description: "Attendance Management System",
      imgUrl: atn3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  "Showcasing a diverse range of projects highlighting my expertise in front-end development, responsive design, and seamless back-end integration. Each project reflects my passion for creating innovative and user-friendly solutions."
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {emsProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {atnProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
