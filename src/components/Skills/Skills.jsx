import React, { useContext, useState } from 'react';
import { Code, Smartphone, Server, Database, Palette, Wrench, GraduationCap } from 'lucide-react';
import './Skills.css';
import { themeContext } from '../../Context'; 

const Skills = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: "Frontend / Mobile", //Frontend & UI  
      icon: <Code className="icon" />,
      gradient: "blue-gradient",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React Native (Expo)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Zustand", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" }, 
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        
      ],
      gridSpan: "col-span-2"
    },
    {
      title: "Backend",
      icon: <Server className="icon" />,
      gradient: "green-gradient",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
      ],
      gridSpan: "col-span-1"
    },
    {
      title: "Databases",
      icon: <Database className="icon" />,
      gradient: "orange-gradient",
      skills: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      gridSpan: "col-span-1"
    },
    {
      title: "Design Tools",
      icon: <Palette className="icon" />,
      gradient: "pink-gradient",
      skills: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Framer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"}
        
      ],
      gridSpan: "col-span-1"
    },
    {
      title: "Dev Tools & Testing",
      icon: <Wrench className="icon" />,
      gradient: "indigo-gradient",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Trello", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
        { name: "Jest", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"},
        { name: "Postman", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},
        { name: "Swagger", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"},
        
      ],
      gridSpan: "col-span-1"
    }
  ];

  const languages = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ];

  const academicSkills = [
    { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Symfony", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
    { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
  ];

  return (
    <div className={`skills-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="skills-content"> 
        {/* Header avec animation blob */}
        <div className="skills-header">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <h2 className="skills-title">
            {/* <span className="gradient-text"> */}
              Tech Stack
            {/* </span> */}
          </h2>
        </div>

        {/* Languages Highlight */}
        <div className="languages-container">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="language-card-wrapper"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="language-glow" />
              <div className="language-card">
                <img src={lang.logo} alt={lang.name} className="language-logo" />
                <p className="language-name">{lang.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid pour les catégories */}
        <div className="bento-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bento-item ${category.gridSpan} hover-lift`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bento-card ${
                hoveredCard === idx ? 'card-hovered' : ''
              }  ${darkMode} ? 'dark-card' : 'light-card'`}>
                {/* Header */}
                <div className="bento-header">
                  <div className={`icon-container ${category.gradient}`}>
                    {category.icon}
                  </div>
                  <h3 className="bento-title">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="skill-item"
                    >
                      <div className="skill-icon-wrapper">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="skill-logo"
                        />
                      </div>
                      <span className="skill-name">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Skills Section */}
        <div className="academic-section">
          <div className="academic-header">
            <GraduationCap className="academic-icon" />
            <h3 className="bento-title">Explored Technologies</h3>
            <div className="academic-divider" />
          </div>

          <div className="academic-skills-grid">
            {academicSkills.map((skill, idx) => (
              <div
                key={idx}
                className="academic-skill-wrapper"
              >
                  <div
                      key={idx}
                      className="skill-item"
                    >
                      <div className="skill-icon-wrapper">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="academic-icon"
                        />
                      </div>
                      <span className="skill-name">
                        {skill.name}
                      </span>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;