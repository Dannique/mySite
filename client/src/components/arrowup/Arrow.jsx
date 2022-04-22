//import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './arrow.scss';
import ArrowUpwards from "../../images/up-arrow.png"

export default function ArrowUp(props){ 
    return(
      <div>
         <a href="#intro">
             <img src={ArrowUpwards} className={props.arrowClass} alt="ArrowUpwards" width="50px" height="50px"/>           
        </a>
            
      </div>
    )
}