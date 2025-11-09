import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import "./App.css";
import SocialActivities from "./components/SocialActivities/SocialActivities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Projects } from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#170B3B" : "",
        // #1B1734
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Skills/>
      <Projects/>
      <SocialActivities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
