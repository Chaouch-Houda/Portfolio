import { Col } from "react-bootstrap";
import { themeContext } from "../../Context";
import { useContext } from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Col size={12} sm={6} md={4}>
      {/* <div className="proj-imgbx"  style={{boxShadow : `${darkMode ? '0px 0px 5px rgba(255, 255, 255, 0.313)' : ''}`}}> */}
      <div className="proj-imgbx"  style={{backgroundImage: `url(${imgUrl})`,backgroundRepeat: 'no-repeat',backgroundPosition:'center',backgroundSize: 'cover',boxShadow : `${darkMode ? '0px 0px 5px rgba(255, 255, 255, 0.313)' : ''}`}}>
        {/* <img src={imgUrl} style={{height:"100%",width:"100%"}}/> */}
        <div className="proj-txtx col-md-4 col-sm-6" >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
