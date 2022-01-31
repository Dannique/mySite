import "./about.scss";
import Arrow from '../arrowup/Arrow'
import Me from "../../images/niekhd.png";

export default function About() {
    return(
        <div className="about" id="about">
            <p className="aboutText">about</p>
            <img src={Me} alt="cartoon of me" className='avatar' height="372px" width="372px" />  
            <Arrow/>
        </div>
    )
}