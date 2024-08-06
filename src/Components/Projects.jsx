import classes from "../styles/projects.module.css"
import vintage from "../assets/Vintage.png"
import vintage1 from "../assets/vintage1.png"
import vintage2 from "../assets/vintage2.png"
import vintage3 from "../assets/vintage3.png"
import spear from "../assets/spear.png"
import spear1 from "../assets/spear1.png"
import spear2 from "../assets/spear2.png"
import spear3 from "../assets/spear3.png"
import queseria from "../assets/queseria.png"
import queseria1 from "../assets/queseria1.png"
import queseria2 from "../assets/queseria2.png"
import queseria3 from "../assets/queseria3.png"
import fatfuckers from "../assets/fatfuckers.png"
import fat from "../assets/fat.png"
import fat1 from "../assets/fat1.png"
import fat2 from "../assets/fat2.png"
import react from "../assets/React.webp"
import mongodb from "../assets/mongodb.webp"
import node from "../assets/kofe.png"
import javascript from "../assets/js.png"
import html from "../assets/html.png"
import git from "../assets/git.webp"
import github from "../assets/image.png"
import css from "../assets/css.png"


const Projects = () => {

    return (<>
        <section className={classes.projects}>
            <section className={classes.vintage}>
                <h1>Vintage Reborn</h1>
                <p className={classes.paragraph}>This has been my biggest challenge so far and the one I'm most proud of. With the help of 2 other collegues, we created an ecommerce shop build in React, Node.js, Express.js and Mongo DB Atlas.
                    It took up to 2 weeks to complete the web but the result is amazing. Simple layout with extra funtionalities for admins and also for users. I encourage you
                    to check it out by yourself. So far all the functions are available for the user to have the pov of a customer and also as an admin!
                </p>
                <div className={classes.imgContainer}>
                    <div className={classes.imgs}>
                        <img src={vintage} alt="photo of the vintage web app" className={classes.images} />
                        <img src={vintage1} alt="photo of the vintage web app" className={classes.images} />
                    </div>
                    <div className={classes.imgs}>
                        <img src={vintage2} alt="photo of the vintage web app" className={classes.images} />
                        <img src={vintage3} alt="photo of the vintage web app" className={classes.images} />
                    </div>


                </div>
                <h3>Project skillset: </h3>
                <ul className={classes.list}>
                    <div className={classes["list-inner"]}>
                        <li><img src={react} alt="React" /></li>
                        <li><img src={javascript} alt="JavaScript" /></li>
                        <li><img src={node} alt="Node" /></li>
                        <li><img src={css} alt="CSS" /></li>
                        <li><img src={mongodb} alt="MongoDB" /></li>
                        <li><img src={git} alt="GIT" /></li>
                        <li><img src={github} alt="GITHUB" /></li>
                        <li><img src={react} alt="React" /></li>
                        <li><img src={javascript} alt="JavaScript" /></li>
                        <li><img src={node} alt="Node" /></li>
                        <li><img src={css} alt="CSS" /></li>
                        <li><img src={mongodb} alt="MongoDB" /></li>
                        <li><img src={git} alt="GIT" /></li>
                        <li><img src={github} alt="GITHUB" /></li>
                        <li><img src={react} alt="React" /></li>
                        <li><img src={javascript} alt="JavaScript" /></li>
                        <li><img src={node} alt="Node" /></li>
                        <li><img src={css} alt="CSS" /></li>
                        <li><img src={mongodb} alt="MongoDB" /></li>
                        <li><img src={git} alt="GIT" /></li>
                        <li><img src={github} alt="GITHUB" /></li>
                    </div>
                </ul>
            </section>
            <section className={classes.spear}>
                <h1>Spear The Fish!</h1>
                <p className={classes.paragraph}>My first game available on the web. Fully build on JavaScript and some CSS with a vintage layout in just one week! I do not have much more to say, deep in, take a deep breath
                    and try to not lose all your lives! Spoiler alert: if you are a sensitive person, do not go over the info section.
                </p>
                <div className={classes.imgContainer}>
                    <div className={classes.imgs}>
                        <img src={spear} className={classes.images} />
                        <img src={spear1} className={classes.images} />
                    </div>
                    <div className={classes.imgs}>
                        <img src={spear2} className={classes.images} />
                        <img src={spear3} className={classes.images} />
                    </div>
                </div>
                <h3>Project skillset: </h3>
                <ul className={classes.list}>
                    <li><img src={javascript} alt="JavaScript" /></li>
                    <li><img src={css} alt="CSS" /></li>
                    <li><img src={git} alt="GIT" /></li>
                    <li><img src={github} alt="GITHUB" /></li>
                </ul>
            </section>
            <section className={classes.fat}>
                <h1>FatFuckers</h1>
                <p className={classes.paragraph}>I collaborate with a collegue on this project and I can assure you is worthy. Who did not start the gym almost blindly? Feeling lost in the middle of the gym
                    or even at home? Well, this Web will help you on that. Build on React and Node.js, you will check which exercise you can do depending on the categories we
                    have defined, you can also add or remove exercises, and some other features that are yet come!
                </p>
                <div className={classes.imgContainer}>
                    <div className={classes.imgs}>
                        <img src={fatfuckers} className={classes.images} />
                        <img src={fat} className={classes.images} />
                    </div>
                    <div className={classes.imgs}>
                        <img src={fat1} className={classes.images} />
                        <img src={fat2} className={classes.images} />
                    </div>
                </div>
                <h3>Project skillset: </h3>
                <ul className={classes.list}>
                    <div className={classes["list-inner"]}>
                        <li><img src={react} alt="React" /></li>
                        <li><img src={javascript} alt="JavaScript" /></li>
                        <li><img src={node} alt="Node.js" /></li>
                        <li><img src={css} alt="CSS" /></li>
                        <li><img src={mongodb} alt="MongoDB" /></li>
                        <li><img src={git} alt="GIT" /></li>
                        <li><img src={github} alt="GITHUB" /></li>
                        <li><img src={react} alt="React" /></li>
                        <li><img src={javascript} alt="JavaScript" /></li>
                        <li><img src={node} alt="Node.js" /></li>
                        <li><img src={css} alt="CSS" /></li>
                        <li><img src={mongodb} alt="MongoDB" /></li>
                        <li><img src={git} alt="GIT" /></li>
                        <li><img src={github} alt="GITHUB" /></li>
                        <li><img src={react} alt="React" /></li>
                        <li><img src={javascript} alt="JavaScript" /></li>
                        <li><img src={node} alt="Node.js" /></li>
                        <li><img src={css} alt="CSS" /></li>
                        <li><img src={mongodb} alt="MongoDB" /></li>
                        <li><img src={git} alt="GIT" /></li>
                        <li><img src={github} alt="GITHUB" /></li>
                    </div>
                </ul>
            </section>
            <section className={classes.queseria}>
                <h1>Quesería el Bregador</h1>
                <p className={classes.paragraph}>This page is something else. It was great the output just 2 months after I started studying by myself Web Development. Nothing too fancy, basic styling, some
                    mock data mixed with real data. Build on HTML and CSS, I can tell you I am really happy to make a website for the businness of my brother, feel free to check it,
                    the personal value on this one is out of limits!
                </p>
                <div className={classes.imgContainer}>
                    <div className={classes.imgs}>
                        <img src={queseria} className={classes.images} />
                        <img src={queseria1} className={classes.images} />
                    </div>
                    <div className={classes.imgs}>
                        <img src={queseria2} className={classes.images} />
                        <img src={queseria3} className={classes.images} />
                    </div>
                </div>
                <h3>Project skillset: </h3>
                <ul className={classes.list}>
                    <li> <img src={html} alt="HTML" /></li>
                    <li><img src={css} alt="CSS" /></li>
                    <li><img src={git} alt="GIT" /></li>
                    <li><img src={github} alt="GITHUB" /></li>
                </ul>
            </section>


        </section> </>);
}

export default Projects;