import "./about.scss"
import Arrow from '../arrowup/Arrow'
import FadeIn from '../fade/FadeIn'
import Resume from "../../assets/DanniqueCV.pdf"
import js from "../../images/javascript.png"
import html from "../../images/html5.png"
import css from "../../images/css3.png"
import nodejs from "../../images/node.png"
import git from "../../images/git.png"
import api from "../../images/api.png"
import mongodb from "../../images/mongodb.png"
import ejs from "../../images/ejs.png"
import react from "../../images/react.png"
import jquery from "../../images/jquery.png"
import sass from "../../images/sass.png"

export default function About() {
    return(
        <div className="about" id="about">
        <Arrow/>
          <FadeIn>
            <div className="top">

                <div className="textDiv">
                    <h1>ABOUT ME</h1>
                    <p className="aboutText name">My name is Dannique de Klerk, and I'm based in the Netherlands.</p>
                    <p className="aboutText"> 
                        I'm constantly looking into improving myself as a developer and a person. <br/>
                        Here to help you bring your ideas to reality, where it be front-end or server side, I'll be happy to help you reach your destination.<br/>
                        My drive to provide you with the best possible product is powered by a particular set of skills, coffee, and an undying love for my cats.
                        <span className="displayText">
                            <br/>
                            I help small businesses improve their online presence on time and on budget.
                        </span> 
                    </p> 
                    <p className="aboutTextBot">Got Any Questions? <br/> <a href="#contact" className="contactLink"> Contact Me </a>
                    <div className="btnDiv">
                        <button class="custom-btn btn-3"><a href={Resume} download="Dannique's CV"><span className='border'><p className='btn-text'>Download CV</p></span></a></button>
                    </div> 
                    </p>
                </div>
            </div>

            <div className="bottom">
                <div className="listDiv">
                    <h1>SKILLS</h1>
                   
                        <div className="skillUl ulOne">
                            <ul>
                                <li className="js"> <img src={js} height="25px" width="25px" alt="jsLogo" className="skillIcon" />JavaScript</li>
                                <li className="html"><img src={html} height="25px" width="25px" alt="htmlLogo" className="skillIcon"/>HTML5</li>
                                <li className="css"><img src={css} height="25px" width="25px" alt="cssLogo" className="skillIcon"/>CSS3</li>
                            </ul>
                        </div>

                        <div className="skillUl ulTwo">
                            <ul>
                                <li><img src={nodejs} height="25px" width="25px" alt="nodejsLogo" className="skillIcon"/>NodeJS</li>
                                <li><span className="express" >EX </span> Express</li>
                                <li><img src={git} height="25px" width="25px" alt="gitLogo" className="skillIcon"/>Git</li>
                            </ul>
                        </div>

                        <div className="skillUl ulThree">
                            <ul>
                                <li><img src={api} height="25px" width="25px" alt="apiLogo" className="skillIcon"/>RESTful API</li>
                                <li><img src={mongodb} height="25px" width="25px" alt="mongodbLogo" className="skillIcon"/>MongoDB</li>
                                <li><img src={ejs} height="15px" width="30px" alt="ejsLogo" className="skillIcon ejs"/>EJS</li>
                            </ul>
                        </div>

                        <div className="skillUl ulFour">
                            <ul>
                                <li><img src={react} height="25px" width="25px" alt="reactLogo" className="skillIcon"/>ReactJS</li>
                                <li><img src={jquery} height="25px" width="25px" alt="jqueryLogo" className="skillIcon"/>JQuery</li>
                                <li><img src={sass} height="25px" width="25px" alt="sassLogo" className="skillIcon"/>Sass</li>
                            </ul>
                        </div>     
                </div>
            </div>
          </FadeIn>
        </div>
    )
}
