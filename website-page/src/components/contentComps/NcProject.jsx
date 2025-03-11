import { useState } from "react";
import NcNewsBack from "../../assets/NcNewsBack.png"
import JS from "../../assets/JS.png";
import Netlify from "../../assets/netlify.png";
import HOWTOPLAY from "../../assets/BarclaysMen.jpeg";
import GAMEPLAY from "../../assets/BarclaysMen 2.jpeg";
import WIN from "../../assets/BarclaysMen 3.jpeg";
import GeneralLayout from "../../assets/GeneralLayout.png"


export default function NcProject({projectPageNc,setProjectPageNc }) {

    const [activeCard, setActiveCard] = useState("gamePlay");

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
         This was my first full stack finished project, completed whilst at Northcoders. Over the course of 2 weeks I produced a solid backend complimeted with rigouros testing for all eventualities including 20+ SQL queries and 10+ Restful API's including GET,PATCH,POST and DELETE requests as well as error handling. The front end built in React has dynamin routes and 'useContext' for customised UX as well as exemples of other React Hooks.
          </p>
        </section>
        <section className="projectVideo">
          <button
            className="gltag"
            style={{
              border: activeCard === "gamePlay" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("gamePlay")}
          >
            general
          </button>
          <button
            className="howtotag"
            style={{
              border: activeCard === "howToPlay" ? "black solid 1px" : "none",
              // opacity: activeCard === "howToPlay" ? "1" : "0.5"
            }}
            onClick={() => setActiveCard("howToPlay")}
          >
            ux
          </button>
          <button
            className="gotag"
            style={{
              border: activeCard === "gameOver" ? "black solid 1px" : "none",
            }}
            onClick={() => setActiveCard("gameOver")}
          >
           features
          </button>
          {/* <img
            className="howToPlayPP"
            src={HOWTOPLAY}
            style={{ zIndex: activeCard === "howToPlay" ? 10 : 0 }}
          ></img> */}
          {/* <img
            className="winPP"
            src={WIN}
            style={{ zIndex: activeCard === "gameOver" ? 10 : 0 }}
          ></img> */}
          <section className="overflow">
          <img
            className="generalLayoutPP"
            src={GeneralLayout}
            style={{ zIndex: activeCard === "gamePlay" ? 10 : 0 }}
          ></img>
            </section>
          <section
            className="projectGeneralLayout"
            //   src={WIN}
            //   style={{ zIndex: activeCard === "gamePlay" ? 10 : 0 }}
          >
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
            >
             
            </li>
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
            >
             
            </li>
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
            >

            </li>
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
            >
            
            </li>
          </section>
          <section
            className="projectHowToPlay"
            style={{ zIndex: activeCard === "howToPlay" ? 10 : 0 }}
          >
            <li
              className="howtoblurb"
              style={{ opacity: activeCard === "howToPlay" ? 1 : 0 }}
            >
     
            </li>
            <li
              className="howtoblurb"
              style={{ opacity: activeCard === "howToPlay" ? 1 : 0 }}
            >
            
            </li>
            <p
              className="howtoblurb"
              style={{ opacity: activeCard === "howToPlay" ? 1 : 0 }}
            >
            
            </p>
          </section>
          <section
            className="projectGameOver"
            style={{ zIndex: activeCard === "gameOver" ? 10 : 0 }}
          >
            {/* <button className="gotagTop" onClick={() => setActiveCard('gameOver')}>game over</button> */}
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "gameOver" ? 1 : 0 }}
            ></p>
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "gameOver" ? 1 : 0 }}
            >
        
            </p>
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "gameOver" ? 1 : 0 }}
            >
    
            </p>
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "gameOver" ? 1 : 0 }}
            >
        
            </p>
          </section>
        </section>
        <section className="projectStack">
          <p className="stackTextNc">Stack</p>
          <img className="Expo" src={JS}></img>
         
    
        </section>
      </section>
    )

}