import "./about.scss";
import Arrow from '../arrowup/Arrow'
import SkillBar from "react-skillbars";

const skills = [
    {
      type: "CSS3/HTML5",
      level: 95
    },
    {
      type: "JavaScript",
      level: 85
    },
    {
      type: "Node.js",
      level: 75
    },
    {
      type: "Express",
      level: 75
    },
    {
      type: "ReactJS",
      level: 70
    },
    {
      type: "JQuery",
      level: 85
    },
    {
      type: "EJS",
      level: 90
    },
    {
      type: "MongoDB",
      level: 80
    },
    {
      type: "Bootstrap",
      level: 90
    },
    {
      type: "Sass",
      level: 70
    },
    {
      type: "SQL",
      level: 30
    },
  ],
  colors = {
    bar: "#3498db",
    title: {
      text: "white",
      background: "transparent"
    }
  };



export default function About() {
    return(
    <div className="about" id="about">
       
        <Arrow/>
        <div className="left">

          <div className="textDiv">
            <h1 className="aboutText">about</h1>
            <h1 className="aboutText">left</h1>
          </div>

        </div>

        <div className="right">

            <div id="elementAllBarAllTextAllBg">

                <div>
                    <pre>
                        <br />
                    </pre>
                </div>
                <div className="skillDiv">
                    <SkillBar
                     className="skillBar"
                     skills={skills}
                     height={27}
                     colors={colors}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}