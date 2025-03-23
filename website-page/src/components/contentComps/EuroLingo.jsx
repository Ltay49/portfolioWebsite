import { useState } from "react";
import GP from "../../assets/Gamplay.mp4"
import ELBack from "../../assets/backgroundImage.png"
import LOGIN from "../../assets/login.mp4"
import CAVE from "../../assets/cave.mp4"
import TS from "../../assets/TS.png";
import JS from "../../assets/JS.png";
import MongoDB from "../../assets/MongoDB.png";
import Mongoose from "../../assets/mongoose.png";
import Netlify from "../../assets/netlify.png";
import NPM from "../../assets/npm.png"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import REACT from "../../assets/React.png"
import RENDER from "../../assets/Render.png"
import PHASER from "../../assets/Phaser.png"

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
          login
          </button>
          <button
            className="eltagb"
            style={{
              border: activeCard === "layout(b)" ? "black solid 1px" : "none",
              // opacity: activeCard === "howToPlay" ? "1" : "0.5"
            }}
            onClick={() => setActiveCard("layout(b)")}
          >
        game
          </button>
          <button
            className="featureelstag"
            style={{
              border: activeCard === "features(a)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(a)")}
          >
     more
          </button>
          <button
            className="fteltagb"
            style={{
              border: activeCard === "features(b)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(b)")}
          >
            cave
          </button>
          <button
            className="fteltagc"
            style={{
              border: activeCard === "features(c)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(c)")}
          >
            more
          </button>
          <video
            className="articlePP"
            src={LOGIN}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ zIndex: activeCard === "layout(a)" ? 10 : 0,
                opacity: activeCard === "layout(a)" ? 1 : 0  }}
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
              style={{ zIndex: activeCard === "layout(b)" ? 10 : 0,
              opacity: activeCard === "layout(b)" ? 1 : 0}}
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
           Checks log in details, both username and password via FETCHING user details.
            </li>
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            Prompt to ceate an account which will result in POST request to add a user to the game.
            </li>
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            Logging in with a user account allows for a smooth method of saving user game play.
            </li>
            <li
              className="ELblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            
            </li>
          </section>
          <section
            className="projectlayoutB"
            style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
          >
          </section>
          <section
            className="featuresA"
            style={{ zIndex: activeCard === "features(a)" ? 9 : 0,
            opacity: activeCard === "features(a)" ? 1 : 0 }}
          >
            {/* <button className="gotagTop" onClick={() => setActiveCard('gameOver')}>game over</button> */}
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(a)" ? 1 : 0 }}
            >PhaserJs features incluse depth, gravity, collide, setDraggable and physics to create the feel of the game. </p>
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(a)" ? 1 : 0 }}
            >
           Api call made on house entry, FETCHING words from the DB, then randomised to ensure a new learning experience for each level.
            </p>
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(a)" ? 1 : 0 }}
            >
            Customised interactions relfecting usersname and progress, guidng the user through the game play.
            </p>
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(a)" ? 1 : 0 }}
            >
          POST requests to the users collection, tracking progression, reflected in the main map progress bar.
            </p>
          </section>
          <section
            className="featuresB"
            style={{ zIndex: activeCard === "features(a)" ? 9 : 0,
            opacity: activeCard === "features(a)" ? 1 : 0 }}
          >
            </section>
            <section
            className="ELA"
            style={{ zIndex: activeCard === "features(c)" ? 9 : 0,
            opacity: activeCard === "features(c)" ? 1 : 0 }}
          >
            {/* <button className="gotagTop" onClick={() => setActiveCard('gameOver')}>game over</button> */}
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(c)" ? 1 : 0 }}
            >The game provides extra game play for advanced learners, available upon completion after all the house rounds</p>
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(c)" ? 1 : 0 }}
            >
            A user can choose to futher test the language off all the choice after acomplishing the foundations in the house scences.
            </p>
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(c)" ? 1 : 0 }}
            >
           API GET request for chosen langauge, randomisiation of the words for a unique learning experience
            </p>
            <p
              className="ELblurb1"
              style={{ opacity: activeCard === "features(c)" ? 1 : 0 }}
            >
           setMask, graphics, destroy used for effects.
            </p>
          </section>
          <section
            className="featuresB"
            style={{ zIndex: activeCard === "features(b)" ? 9 : 0,
            opacity: activeCard === "features(b)" ? 1 : 0 }}
          >
               <video
              className="hoverVideo1"
              src={CAVE}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ zIndex: activeCard === "features(b)" ? 10 : 0,
              opacity: activeCard === "features(b)" ? 1 : 0}}
            ></video> 
            </section>
        </section>
        <section className="projectStack">
          <p className="stackTextEl">Stack</p>
            <img className="Expo" src={TS}></img>
            <img className="Expo" src={JS}></img>
            <img className="Expo" src={PHASER}></img>
            <img className="Expo" src={Netlify}></img>
            <img className="Expo" src={HTML}></img>
            <img className="Expo" src={CSS}></img>
            <img className="Expo" src={REACT}></img>
            <img className="Expo" src={NPM}></img>
            <img className="Expo" src={RENDER}></img>
            <img className="Expo" src={MongoDB}></img>
            <img className="Expo" src={Mongoose}></img>

        </section>
      </section>
    )
}