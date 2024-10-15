import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../img/projets/projetStage.png";
import projImg2 from "../../img/projets/universityWeb.png";
import projImg3 from "../../img/projets/springboot.png";
import projImg4 from "../../img/projets/chatbot.png";
import projImg5 from "../../img/projets/gym.png";
import projImg6 from "../../img/projets/rbkChallenge.png";
import projImg7 from "../../img/projets/myCar.png";
import projImg8 from "../../img/projets/universityStudent.png";
// import projImg9 from "../../img/projets/image.png";
import projImg10 from "../../img/projets/universityMobile.png";
import projImg11 from "../../img/projets/budgetApp.png";

import colorSharp2 from "../../img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { themeContext } from "../../Context";
import { useContext } from "react";


export const Projects = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      title: "GoalTrack",
      description: "Conceptualized with Astah and designed with Framer, this project entailed frontend development of an AI application that processes football and handball match videos. The backend was exclusively for authentication purposes, utilizing React JS, Express JS, and MySQL.",
      imgUrl: projImg1,
    },
    {
      title: "University Management Application",
      description: "Implemented a university management system with React JS, Express JS, and MongoDB, developed collaboratively.",
      imgUrl: projImg2,
    },
    {
      title: "Library Management Application",
      description: "Developed a library management system collaboratively with a microservices architecture utilizing Spring Boot, Kafka, PostgreSQL, and reactive programming.",
      imgUrl: projImg3,
    },
    {
      title: "Ecommerce-Chatbot",
      description: "During my ML learning journey, I experimented with understanding and customizing an existing algorithm to suit the requirements of an e-commerce application developed in React js, MongoDB, and Express.js. I utilized libraries like Torch, nltk_utils, and numpy.",
      imgUrl: projImg4,
    },
    {
      title: "Gym Management Project",
      description: "Created collaboratively with JavaFX and MySQL, this application was developed to manage gym operations.",
      imgUrl: projImg5,
    },
    {
      title: "DevLinks",
      description: " Created a simple app that allows users to create a card containing all their social media account links, making it easy to share.",
      imgUrl: projImg6,
    },
    {
      title: "MYCAR",
      description: "Designed with Figma, this application manages appointments within a car dealership.",
      imgUrl: projImg7,
    },
    {
      title: "University Application",
      description: "Collaboratively designed a university management application with Figma.",
      imgUrl: projImg8,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg9,
    // },
    {
      title: "University Application for Visually Impaired",
      description: "Collaborated on the design of this application  to meet the needs of users with myopia or other visual problems",
      imgUrl: projImg10,
    },
    {
      title: "Company's Budget Allocation",
      description: "Developed a simple app as part of a training program.",
      imgUrl: projImg11,
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
                <p style={{color : `${darkMode ? '' : 'var(--gray)'}`}}>Here is a selection of projects I've developed during my university career and self-study, where I've acquired skills in various programming languages, frameworks and technological tools. In addition to my individual projects, I've also had the opportunity to collaborate on several projects, which has allowed me to strengthen my teamwork skills and adapt to different group dynamics.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first"  className={`${darkMode ? 'projects-tabs-dark' : ''}`}>
                  <Nav variant="pills" className={`nav-pills mb-5 justify-content-center align-items-center`} id="pills-tab">
                    <Nav.Item > 
                      <Nav.Link eventKey="first" style={{color : `${darkMode ? 'white' : 'black'}`}}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{color : `${darkMode ? 'white' : 'black'}`}}>Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{color : `${darkMode ? 'white' : 'black'}`}}>Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 6).map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(6, 12).map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects.slice(12, 18).map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
