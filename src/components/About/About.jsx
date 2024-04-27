import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Houda-Chaouch.pdf';
import Resume1 from './Houda-Chaouch(1).pdf'
import Download from "@iconscout/react-unicons/icons/uil-file-download";
import CustomAnimation from '../../animation/CustomAnimation';


const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  const [animation3,ref3]= CustomAnimation(0.2, {y:0,opacity:1,scale:1,transition:{type:"ease" , duration:0.8}} ,{ y:'60px',opacity:0,scale:0.5});

  return (
    <div className="about" ref={ref3} id="about">
      {/* left side */}
      <div className="awesome">
        <motion.div className="font1" id='motivate' animate={animation3}>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>About me</span>
        <span style={{color : `${darkMode ? '' : 'var(--gray)'}`}}>
        Currently in my second year of a software engineering degree, I am a student with a passion for full-stack web development. Always on the lookout for new opportunities to enrich my professional journey, I am open to internships in this sector. Known for my punctuality and organization, I contribute to the smooth running of activities by demonstrating seriousness and commitment. With excellent interpersonal skills, I enjoy working in a team and always strive to create a positive and collaborative work environment. My goal is to apply my technical skills and personal qualities to innovative and challenging projects in the field of web development.
          <br />
        </span>
        </motion.div>
        {/* dark mode */}
        {/* <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>About me</span>
        <span>
        Currently in my second year of a software engineering degree, I am a student with a passion for full-stack web development. Always on the lookout for new opportunities to enrich my professional journey, I am open to internships in this sector. Known for my punctuality and organization, I contribute to the smooth running of activities by demonstrating seriousness and commitment. With excellent interpersonal skills, I enjoy working in a team and always strive to create a positive and collaborative work environment. My goal is to apply my technical skills and personal qualities to innovative and challenging projects in the field of web development.
          <br />
        </span> */}
        <a href={Resume} download style={{    marginTop: "4rem",width:"fit-content",height:"fit-content"}}>
          <button className="button s-button">English Resume <Download/></button>
        </a>
        <a href={Resume1} download style={{    marginTop: "4rem",width:"fit-content",height:"fit-content"}}>
          <button className="button s-button">French Resume <Download/> </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"software system design"}
            detail={"Astah,StarUML  Figma,Framer"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Soft Skills"}
            detail={"Teamwork, Stress Management, Critical Thinking, Problem Solving"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Developer"}
            detail={
             "React js, Nodejs, Express, MongoDB, MYSQL, postgreSQL, Bootstrap, Tailwind "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
