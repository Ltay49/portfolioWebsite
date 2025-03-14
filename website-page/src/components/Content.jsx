import Projects from './contentComps/Projects'
import Certs from "./contentComps/Certs"


export default function Content (){

    return (
        <div className="content">
            <section className="projectContainer">
            <section className="projectTitle">
                <h3>Projects</h3>
            </section>
               <Projects/>
            </section>
            <section  className="certsAndStacksContainer" id="certification">
            <h3>Certs & Stacks</h3>
            </section>
            <Certs/>
            <section className="aboutMeContainer" id="aboutMe">
            <h3>About Me</h3>
            </section>
            <section className="getInTouchContainer">
            <h3>Get in touch!</h3>
            </section>
        </div>
    )
    
    
    
    }