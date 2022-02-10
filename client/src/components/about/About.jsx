import "./about.scss";
import Arrow from '../arrowup/Arrow'
import FadeIn from '../fade/FadeIn';
//import SkillBar from "react-skillbars";
import Test from "../../images/git.png"

// const skills = [
//     {
//       type: "CSS3/HTML5",
//       level: 95
//     },
//     {
//       type: "JavaScript",
//       level: 85
//     },
//     {
//       type: "Node.js",
//       level: 75
//     },
//     {
//       type: "Express",
//       level: 75
//     },
//     {
//       type: "ReactJS",
//       level: 70
//     },
//     {
//       type: "JQuery",
//       level: 85
//     },
//     {
//       type: "EJS",
//       level: 90
//     },
//     {
//       type: "MongoDB",
//       level: 80
//     },
//     {
//       type: "Bootstrap",
//       level: 90
//     },
//     {
//       type: "Sass",
//       level: 70
//     },
//     {
//       type: "SQL",
//       level: 30
//     },
//   ],
//   colors = {
//     bar: "#3498db",
//     title: {
//       text: "white",
//       background: "transparent"
//     }
//   };



export default function About() {
    return(
    <div className="about" id="about">
       
        <Arrow/>
        <FadeIn>
        <div className="top">

          <div className="textDiv">
            <h1>ABOUT ME</h1>
            <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices ullamcorper felis, id mattis magna elementum eu. 
            Aenean porta lectus tincidunt, eleifend magna vitae, convallis ipsum.</p>
            <p className="aboutText"> Nam bibendum justo blandit tellus hendrerit sollicitudin eget a nulla. Proin egestas, nisi a elementum ultrices, lorem sapien consequat enim, 
            in pulvinar mi sem in quam.</p> 
            <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque, tortor non eleifend elementum, sem mi ullamcorper massa, nec condimentum urna libero sed justo.
             Vivamus efficitur vel leo ut dignissim. Sed ac ipsum et erat tempor euismod. Duis a dui tellus. Duis sit amet mollis massa. Etiam in nunc non nisi aliquet convallis eget vitae augue. Mauris ac quam ac massa pulvinar ultrices.
              Fusce consectetur malesuada tellus, ut lobortis nisl imperdiet eu.
              </p>
              <div className="btnDiv">
            <button class="custom-btn btn-3"><a href={Test} download="Dannique's CV"><span className='border'><p className='btn-text'>Download CV</p></span></a></button>
            </div>
          </div>
        
        </div>

        <div className="bottom">

            <div id="elementAllBarAllTextAllBg">

                <div>
                    <pre>
                        <br />
                    </pre>
                </div>
                <div className="skillDiv">
                <h1>SKILLS</h1>
                <p className="skills"> HTML5 <span className="stripe">|</span> CSS3 <span className="stripe">|</span> JavaScript <span className="stripe">|</span> NodeJS <span className="stripe">|</span> Express <span className="stripe">|</span> RESTful API <span className="stripe">|</span> EJS <span className="stripe">|</span> MongoDB <span className="stripe">|</span> ReactJS <span className="stripe">|</span> JQuery <span className="stripe">|</span> Bootstrap <span className="stripe">|</span> Sass <span className="stripe">|</span> Material UI  </p>
              
                    {/* <SkillBar
                     className="skillBar"
                     skills={skills}
                     height={27}
                     colors={colors}
                    /> */}
                </div>
            </div>
        </div>
        </FadeIn>
    </div>
    )
}