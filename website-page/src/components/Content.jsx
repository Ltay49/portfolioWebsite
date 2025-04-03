import Projects from "./contentComps/Projects";
import Certs from "./contentComps/Certs";
import Contact from "./contentComps/Contact";
import AboutMe from "./contentComps/AboutMe";

export default function Content() {
  return (
    <div className="content">
      <section className="projectContainer">
        <section className="projectTitle">
          <h3>PROJECTS</h3>
        </section>
        <Projects />
      </section>
      {/* <section className="certsAndStacksContainer" id="certification"> */}
        <h3 id="certsTitle">CERTS & STACKS </h3>
      {/* </section> */}
      <Certs />
      <section className="aboutMeContainer" id="aboutMe">
        <h3>ABOUT ME</h3>
      </section>
      <AboutMe />
      <section className="getInTouchContainer">
      <section className="projectTitle">
      <h3 id="contactMe">GET IN TOUCH!</h3>
      </section>
      <Contact />
      </section>
    </div>
  );
}
