import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
import HeartEmoji from "../../assets/images/heartemoji.png";
import Glasses from "../../assets/images/glasses.png";
import Humble from "../../assets/images/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import ResumeEN from '../../assets/files/Houda-Chaouch-EN.pdf';
import ResumeFR from '../../assets/files/Houda-Chaouch-FR.pdf';
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
        <span style={{color : `${darkMode ? 'rgba(255,255,255,0.6)' : 'var(--gray)'}`}}>
          I am a recent Software Engineering graduate and a passionate Full Stack Developer (MERN & React Native).
          With hands-on experience gained through internships and personal projects, I design and develop performant, scalable, and user-friendly web and mobile applications.
          I focus on clean code, best practices, and creating an excellent user experience.
          Known for my punctuality, organization, and teamwork skills, I thrive in collaborative environments and take initiative to contribute effectively.
          I am eager to apply my technical skills and personal qualities to innovative and challenging projects in web and mobile development          <br />
        </span>
        </motion.div>
        <a href={ResumeEN} download="Houda-Chaouch-Resume-EN.pdf" style={{    marginTop: "4rem",width:"fit-content",height:"fit-content"}}>
          <button className="button s-button">English Resume <Download/></button>
        </a>
        <a href={ResumeFR} download="Houda-Chaouch-Resume-FR.pdf" style={{    marginTop: "4rem",width:"fit-content",height:"fit-content"}}>
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
            detail={"Teamwork, Communication, Critical Thinking, Problem Solving, Organization"}
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
             "React js, React Native, Nodejs, Express, MongoDB, MYSQL, postgreSQL, Bootstrap, Tailwind "
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
