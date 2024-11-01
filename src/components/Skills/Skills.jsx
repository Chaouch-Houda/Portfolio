import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";
import { themeContext } from "../../Context";
const Skills =()=> {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const skills = [
    {
      category: "Frontend",
      list: ['HTML / CSS / JavaScript','React.js (Redux, Redux Toolkit, React Query)', 'Ant Design', 'Tailwind CSS / Bootstrap','React Native']
    },
    {
      category: "Backend",
      list: ['Node.js / Express.js', 'SpringBoot/ kafka / reactive programming','PHP / Symfony']
    },
    {
      category: "Databases",
      list: ['MYSQL', 'ORACLE', 'MongoDB','PostgreSQL']
    },
    {
      category: "UML Modeling and Diagramming",
      list: ['Astah','StarUML']
    },
    {
      category: "Design and Prototyping",
      list: ['Figma', 'Framer','Canva']
    },
    {
      category: "Version Control & Documentation",
      list: ['Git / GitHub','Postman','Swagger']
    },
    {
      category: "Project Management",
      list: ['Jira', 'Trello']
    },
    {
      category: "DevOps and Containerization",
      list: ['Docker']
    },
    {
      category: "Data Science and Machine Learning",
      list: ['Python','Jupyter','Google Colab']
    },
    {
      category: "Programming Languages",
      list: ['Java / javaFX', 'Python', 'C', 'C++']
    },
    {
      category: "Development Tools",
      list: ['VSCode','IntelliJ','Android Studio']
    },
    {
      category: "Networking Tools",
      list: ['Cisco Packet Tracer']
    },
    {
      category: "Operating Systems",
      list: ['Linux','Windows']
    },
    {
      category: "Data Integration Tools",
      list: ['Talend']
    },
    
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    arrows:true,
    responsive: [
      {
        breakpoint: 900, // À partir de cette largeur d'écran
        settings: {
          slidesToShow: 1, // Afficher 1 slide
        },
      }
    ],
    // nextArrow:<NextArrow/>,
    slidesToScroll: 1,
  };
  return (
  <div className="skills-container"  id="skills">
    <div className='d-flex flex-column w-100 mb-4'>
      <span>Technologies I have used</span>
    </div>
    <Slider {...settings} className={`skills-slider ${darkMode ? 'skills-slider-dark' : ''}`}>
        {skills.map((skillGroup, index) => (
      //  <div key={index} className='skill-group' style={{background : darkMode ? "rgb(225, 166, 247)" : "rgb(243, 234, 236)" }}>
      <div key={index} className={`skill-group ${darkMode ? 'skill-group-dark' : 'skill-group-light'}`}>
       <h5>{skillGroup.category}</h5>   
            <ul>
            {skillGroup.list.map((skill, index) => (
                <li key={index} style={{fontSize:"16px" }}>{skill}</li>
            ))}
            </ul>
        </div>
        ))}
    </Slider>
  </div>
);
}
export default Skills;
