import classes from "../styles/header.module.css"
import { Link } from "react-router-dom";
import santi from "../assets/santi.png"
import CV from "../assets/NEWCVSANTI.pdf"

const Header = () => {


    return (<>
        <section className={classes.prehead}>
            <ul className={classes.header}>
                <li className={classes.navItemActive}> <Link to="/" className={classes.Navlink}>Home</Link></li>
                <li className={classes.navItem}> <Link to="/projects" className={classes.Navlink}>Projects</Link></li>
                <li className={classes.navItem}> <Link to="/about" className={classes.Navlink}> About</Link> </li>
                <li className={classes.navItem}><img src={santi} alt="Santi Mora" /></li>
                <li className={classes.Navlink}> <Link
                    to={CV}
                    download="Santi's CV"
                    target="_blank"
                    rel="noreferrer"
                >Download CV</Link></li>

            </ul>
        </section>
    </>);
}

export default Header;