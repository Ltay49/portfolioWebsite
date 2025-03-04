import Projects from './contentComps/Projects'


export default function Content (){

    return (
        <div class="content">
            <div className='title'>
                <h1>LEWIS TAYLOR</h1>
                <h3>Full Stack Junior Software Devloper</h3>
            </div>
            <section className="projectContainer">
               <Projects/>
            </section>
            <section className="aboutMeContainer">
            <h3>Certs&Stacks</h3>
            </section>
            <section className="certsAndStacksContainer">
            <h3>About Me</h3>
            </section>
            <section className="getInTouchContainer">
            <h3>Get in touch!</h3>
            </section>
        </div>
    )
    
    
    
    }