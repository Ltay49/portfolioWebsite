import { useState } from "react";
import GP from "../../assets/Gamplay.mp4"
import ELBack from "../../assets/backgroundImage.png"
import LOGIN from "../../assets/login.mp4"

export default function EuroLingo({setProjectPageEl, projectPageEl}){

    const [activeCard, setActiveCard] = useState("layout(a)");

    const newPageHandlerEl = () => {
        setProjectPageEl(true);
    
        if (projectPageEl) {
          setProjectPageEl(false);
        }
      };

    return (
        <section className="projectPage" id="projects">
        <section>
          <button className="backToProjects" onClick={newPageHandlerEl}>
            back to projects
          </button>
        </section>
        <img className="elBack" src={ELBack}></img>
        <section className="projectText">
          <p className="projpageEl">EuroLingo</p>
          <p className="blurb">
            This project was a lot of fun and required me to learn a new tech stack. The backend is composed of no sql collections, using MongoDB, mongoose,atlas and Typescript. The front end is bound via React and Phaser.js. It is an interactive language learning game aimed for beginers but has the funtionality to increase in diffuclty for more accomplished learners. 
          </p>
            {/* <img className="ncbutton" src={NCBTN}></img> */}
        </section>
        <section className="projectVideo"
        >
          <button
            className="eltaga"
            style={{
              border: activeCard === "layout(a)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("layout(a)")}
          >
            cave
          </button>
          <button
            className="eltagb"
            style={{
              border: activeCard === "layout(b)" ? "black solid 1px" : "none",
              // opacity: activeCard === "howToPlay" ? "1" : "0.5"
            }}
            onClick={() => setActiveCard("layout(b)")}
          >
         login 
          </button>
          <button
            className="featureelstag"
            style={{
              border: activeCard === "features(a)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(a)")}
          >
          general
          </button>
          <button
            className="fteltagb"
            style={{
              border: activeCard === "features(b)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(b)")}
          >
            features
          </button>
          <video
            className="articlePP"
            src={LOGIN}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ zIndex: activeCard === "layout(b)" ? 10 : 0,
                opacity: activeCard === "layout(b)" ? 1 : 0  }}
          ></video> 
          {/* <img
            className="generalLayoutPP"
            src={GridLayout}
            style={{ zIndex: activeCard === "layout(a)" ? 10 : 0,
                    opacity: activeCard === "layout(a)" ? 1 : 0}}
          ></img>  */}
             <video
              className="hoverVideo1"
              src={GP}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ zIndex: activeCard === "featues(a)" ? 10 : 0,
              opacity: activeCard === "features(a)" ? 1 : 0}}
            ></video> 
            {/* </section> */}
          <section
            className="projectGeneralLayout"
            style={{
                // border: activeCard === "gamePlay" ? "black solid 1px" : "none",
                opacity: activeCard === "layout(a)" ? 1 : 0
              }}
          >
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0,
             }}
            >
            A flex style display for responsivness
            </li>
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            Articles are FETCHED on render and key/pair values are procsiely positioned
            </li>
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            A user has options to SORT as well as ORDER
            </li>
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            
            </li>
          </section>
          <section
            className="projectlayoutB"
            style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
          >
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            Displayed through a GET request via the 'useParams' hook
            </li>
            <li
               className="ELblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            Occupies the full page with margin left and right
            </li>
            <p
            className="ELblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            Additionally the article comments are FETCHED and comments can be POSTed
            </p>
          </section>
          <section
            className="featuresA"
            style={{ zIndex: activeCard === "features(b)" ? 9 : 0,
            opacity: activeCard === "features(b)" ? 1 : 0 }}
          >
            {/* <button className="gotagTop" onClick={() => setActiveCard('gameOver')}>game over</button> */}
            <p
              className="ftblurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >A user can log in unlocking different features</p>
            <p
              className="ftblurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >
            Via 'useContext' hook the users activity state is shared between components
            </p>
            <p
              className="ftblurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >
            Features eatures of having an account include; a members area where their pp is displayed, a personal greeting in their area as well as main page, the ability to DELETE and PATCH their comments
            </p>
            <p
              className="ftblurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >
            Additional features include PATCH requests to the voting which uses optimistic rendering for instant UX/UI
            </p>
          </section>
          <section
            className="featuresB"
            style={{ zIndex: activeCard === "features(b)" ? 9 : 0,
            opacity: activeCard === "features(b)" ? 1 : 0 }}
          >
            </section>
        </section>
        <section className="projectStack">
          <p className="stackTextEl">Stack</p>
          {/* <img className="Expo" src={HTML}></img>
          <img className="Expo" src={CSS}></img>
          <img className="Expo" src={REACT}></img>
          <img className="Expo" src={SB}></img>
          <img className="Expo" src={NODE}></img>
          <img className="Expo" src={Netlify}></img>
          <img className="Expo" src={JS}></img>
          <img className="Expo" src={RENDER}></img>
          <img className="Expo" src={PG}></img>
          <img className="Expo" src={SQL}></img>
          <img className="Expo" src={NPM}></img> */}
        </section>
      </section>
    )
}