import queseria from "../assets/queseria.png"
import spear from "../assets/spear.png"
import fatfuckers from "../assets/fatfuckers.png"
import vintage from "../assets/Vintage.png"

const HomePage = () => {
    return (<>


        <section className="container">
            <section className="photo">
                <section className="description">
                    <h1>Hello, this is Santi Mora!</h1>
                    <h2>I build websites</h2>
                    <p className="content">Before starting, I want to thank you for checking my portfolio and I invite you to navigate all over the web to see what I am capable of and my current, but not static,
                        skillset. You may think that I am just another new Web Developer, and in a sense I am, but thanks to my background as a photographer, journalist, content creator and
                        Social Media Manager, I am far more than a simple applicant.</p>
                </section>
            </section>
            <h3>Featured Projects</h3>
            <section className="projectsPreview">
                <ul>
                    <li><div className="projectsItem"><img src={vintage} /> <div className="innerItem"> <span className="innertitle">Vintage Reborn</span></div> </div></li>
                    <li><div className="projectsItem"><img src={spear} /><div className="innerItem"> <span className="innertitle">Spear The Fish!</span></div></div></li>
                    <li><div className="projectsItem"><img src={queseria} /><div className="innerItem"> <span className="innertitle"> Queseria el Bregador</span></div></div></li>
                    <li><div className="projectsItem"><img src={fatfuckers} /><div className="innerItem"> <span className="innertitle">FatFuckers</span></div></div></li>
                </ul>
            </section>

        </section>
        HEADER
        HOME - PROJECTS - ABOUT - CONTACT
        MAIN
        H1-H2-IMG-P
        H1-H2-IMG-P
        H1-H2-IMG-P

        FOOTER
        CONTACT
        Hello World</>);
}

export default HomePage;