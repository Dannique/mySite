import "./menu.scss";
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro"><HomeIcon className='icon'/> Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about"><PersonIcon className='icon'/> About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio"><BusinessCenterIcon className='icon'/> Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact"><EmailIcon className='icon'/> Contact</a>
        </li>
      </ul>
    </div>
  );
}
