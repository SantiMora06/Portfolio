import queseria from "../assets/queseria.png"
import spear from "../assets/spear.png"
import fatfuckers from "../assets/fatfuckers.png"
import vintage from "../assets/Vintage.png"
import classes from "../styles/maincontent.module.css"

const HomePage = () => {
    return (<>


        <section className={classes.container}>
            <section className={classes.photo}>
                <section className={classes.description}>
                    <h1>Hello, this is Santi Mora!</h1>
                    <h2>I build websites</h2>
                    <p className={classes.content}>Before starting, I want to thank you for checking my portfolio and I invite you to navigate all over the web to see what I am capable of and my current, but not static,
                        skillset. You may think that I am just another new Web Developer, and in a sense I am, but thanks to my background as a photographer, journalist, content creator and
                        Social Media Manager, I am far more than a simple applicant.</p>
                </section>
            </section>
            <h3>Featured Projects</h3>
            <section className={classes.projectsPreview}>
                <ul>
                    <li><div className={classes.projectsItem}><img src={vintage} /> <div className={classes.innerItem}> <span className={classes.innertitle}>Vintage Reborn</span></div> </div></li>
                    <li><div className={classes.projectsItem}><img src={spear} /><div className={classes.innerItem}> <span className={classes.innertitle}>Spear The Fish!</span></div></div></li>
                    <li><div className={classes.projectsItem}><img src={queseria} /><div className={classes.innerItem}> <span className={classes.innertitle}> Queseria el Bregador</span></div></div></li>
                    <li><div className={classes.projectsItem}><img src={fatfuckers} /><div className={classes.innerItem}> <span className={classes.innertitle}>FatFuckers</span></div></div></li>
                </ul>
            </section>

        </section>
    </>);
}

export default HomePage;