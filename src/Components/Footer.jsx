import { Link } from "react-router-dom";
import classes from "../styles/footer.module.css"

const Footer = () => {
    return (<>
        <section>
            <footer className={classes.footer}>
                <ul>
                    <li> <Link to="mailto:santigomero@gmail.com" >Mail</Link></li>
                    <li><Link>GitHub</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Made by Santi Mora© </Link></li>
                </ul>
            </footer>
        </section>
    </>);
}

export default Footer;