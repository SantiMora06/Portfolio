import classes from "../styles/about.module.css"

const About = () => {
    return (<>
        <div className={classes.container}>
            <h1 className={classes.name}>
                Santiago Mora
            </h1>
            <h2 className={classes.job}>
                Fullstack Web Developer
            </h2>
            <p className={classes.description}>
                Hi there, as you already know I am Santi Mora, someone who loves diving into both frontend and backend of web development, here there is a grasp of what I can do: <br /> <br />
                I can build well-structure and beautifully styled web pages, keeping up with the latest HTML5 and CSS3 standards. My main focus is making sure everything looks great
                and works smoothly on any devide. Also, I enjoy giving interactivity and extra life to web pages with JavaScript, wheter it's through vanilla JS or the lates ES6+ features,
                I enjoy creating interactive and dymanic web experiences. On the server side, I work with Node.js and Express to solid create and scalate APIs. I can handle everything from
                the server-side logic to setting up RESTful services and middleware, such as authentication or roles. <br /> <br />
                I'm comfortable with schema design, data modeling, and all the CRUD operations needed to keep data flowing smoothly, usually I design and manage noSQL databases with MongoDB,
                for testing purposes I use to work with Insomnia. On React is where I feel more comfortable in building dynamic user interfaces, I like to use hooks like useState, useEffects or
                useParams, along with other React features such as UseContext.<br /><br />
                It would be really haard to control versions of my repositorie and collaborate with others without these 2 tools called Git and GitHub. Managing code, tracking changes,
                and working with others through branching and pulling requests is a part of my routine. Understand the conflict, solving them and communicate with your collegues is key.
                I do love writing as clean and mantainable code as possible and keep up with the research about close technologies and deliver solutions that would exceed expectations!
            </p>
            <h3 className={classes.prelist}>Employment - Studies info</h3>
            <ul className={classes.list}>
                <li>Fullstack Web Developer by Bootcamp of IronHack</li>
                <li>AWS Cloud Practitioner</li>
                <li>Degree on journalist by Valladolid University</li>
                <li>Master degree on Sports Management by ESBS</li>
                <li>1 year volunteership at Yellow Shirts Romania - Photographer, interviewer, photo and video editor and Social Media Manager and Content Creator among other attributions.</li>
                <li>1 year as a journalist at Cabildo de La Gomera - Journalist, news writer, Social Media Manager and Content Creator. </li>
                <li>2 months as a waiter in London - Improving my English level and carrying on with waiter services.</li>
            </ul>
        </div>
    </>);
}

export default About;