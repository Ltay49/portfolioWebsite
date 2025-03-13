import { useState } from "react";
import NcNewsBack from "../../assets/NcNewsBack.png"
import JS from "../../assets/JS.png";
import GridLayout from "../../assets/GridLayout1.png"
import IndividualArt from "../../assets/IndividualArt1.png"
import NCVID from "../../assets/nc_news.mp4";
import NPM from "../../assets/npm.png"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import REACT from "../../assets/React.png"
import PG from "../../assets/pg.png"
import SB from "../../assets/supabase.png"
import SQL from "../../assets/sql.png"
import NODE from "../../assets/node.png"
import Netlify from "../../assets/netlify.png";
import RENDER from "../../assets/Render.png"




export default function NcProject({projectPageNc,setProjectPageNc }) {

    const [activeCard, setActiveCard] = useState("layout(a)");

    const newPageHandlerNc = () => {
        setProjectPageNc(true);
    
        if (projectPageNc) {
          setProjectPageNc(false);
        }
      };

    return (
        <section className="projectPage" id="projects">
        <section>
          <button className="backToProjects" onClick={newPageHandlerNc}>
            back to projects
          </button>
        </section>
        <img className="ncBack" src={NcNewsBack}></img>
        <section className="projectText">
          <p className="projpageNcN">Nc News</p>
          <p className="blurb">
         This was my first full stack finished project, completed whilst at Northcoders. Over the course of 2 weeks I produced a solid backend complimented with rigouros testing for all eventualities. 20+ SQL queries with 10+ Restful API's including GET,PATCH,POST and DELETE requests as well as error handling. The front end built in React has dynaminc routes and 'useContext' for customised UX as well as showcasing other hooks. It is an indipendant blog site.
          </p>
          <button>Visit</button>
        </section>
        <section className="projectVideo"
        >
          <button
            className="gltaga"
            style={{
              border: activeCard === "layout(a)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("layout(a)")}
          >
            main
          </button>
          <button
            className="gltagb"
            style={{
              border: activeCard === "layout(b)" ? "black solid 1px" : "none",
              // opacity: activeCard === "howToPlay" ? "1" : "0.5"
            }}
            onClick={() => setActiveCard("layout(b)")}
          >
            article
          </button>
          <button
            className="featurestag"
            style={{
              border: activeCard === "features(a)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(a)")}
          >
          video
          </button>
          <button
            className="fttagb"
            style={{
              border: activeCard === "features(b)" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("features(b)")}
          >
            features
          </button>
          <img
            className="articlePP"
            src={IndividualArt}
            style={{ zIndex: activeCard === "layout(b)" ? 10 : 0,
                opacity: activeCard === "layout(b)" ? 1 : 0  }}
          ></img>
          <img
            className="generalLayoutPP"
            src={GridLayout}
            style={{ zIndex: activeCard === "layout(a)" ? 10 : 0,
                    opacity: activeCard === "layout(a)" ? 1 : 0}}
          ></img>
             <video
              className="hoverVideo1"
              src={NCVID}
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
              className="glblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0,
             }}
            >
            A flex style display for responsivness
            </li>
            <li
              className="glblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            Articles are FETCHED on render and key/pair values are procsiely positioned
            </li>
            <li
              className="glblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            A user has options to SORT as well as ORDER
            </li>
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
            
            </li>
          </section>
          <section
            className="projectlayoutB"
            style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
          >
            <li
              className="glblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            Displayed through a GET request via the 'useParams' hook
            </li>
            <li
               className="glblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            Occupies the full page with margin left and right
            </li>
            <p
            className="glblurb"
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
          <p className="stackTextNc">Stack</p>
          <img className="Expo" src={HTML}></img>
          <img className="Expo" src={CSS}></img>
          <img className="Expo" src={REACT}></img>
          <img className="Expo" src={SB}></img>
          <img className="Expo" src={NODE}></img>
          <img className="Expo" src={Netlify}></img>
          <img className="Expo" src={PG}></img>
          <img className="Expo" src={SQL}></img>
          <img className="Expo" src={NPM}></img>
          <img className="Expo" src={JS}></img>
          <img className="Expo" src={RENDER}></img>
        </section>
      </section>
    )

}