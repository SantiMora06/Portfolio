import { Link } from "react-router-dom";
import classes from "../styles/footer.module.css"

const Footer = () => {
    return (<>
        <section>
            <footer className={classes.footer}>
                <ul>
                    <li> <Link to="mailto:santigomero@gmail.com" target="_blank" >Mail</Link></li>
                    <li><Link to="https://github.com/SantiMora06" target="_blank">GitHub</Link></li>
                    <li><Link to="https://www.linkedin.com/in/santi-mora/" target="_blank">Made by Santi Mora© </Link></li>
                </ul>
            </footer>
        </section>
    </>);
}

export default Footer;