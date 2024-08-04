import classes from "../styles/header.module.css"
import { Link } from "react-router-dom";
import santi from "../assets/santi.png"

const Header = () => {


    return (<>

        <ul className={classes.header}>
            <li> <Link to="/" className={classes.Navlink}>Home</Link></li>
            <li> <Link to="/projects" className={classes.Navlink}>Projects</Link></li>
            <li> <Link to="/about" className={classes.Navlink}> About</Link> </li>
            <li> <Link to="/contact" className={classes.Navlink}>Contact</Link></li>
            <li><img src={santi} alt="Santi Mora" /></li>
        </ul>

    </>);
}

export default Header;