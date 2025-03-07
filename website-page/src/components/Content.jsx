import Projects from './contentComps/Projects'


export default function Content (){

    return (
        <div className="content">
            <section className="projectContainer">
            <section className="projectTitle">
                <h3>Projects</h3>
            </section>
               <Projects/>
            </section>
            <section className="aboutMeContainer" id="certification">
            <h3>Certs & Stacks</h3>
            </section>
            <section className="certsAndStacksContainer" id="aboutMe">
            <h3>About Me</h3>
            </section>
            <section className="getInTouchContainer">
            <h3>Get in touch!</h3>
            </section>
        </div>
    )
    
    
    
    }