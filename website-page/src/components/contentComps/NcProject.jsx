import { useState } from "react";
import NcNewsBack from "../../assets/NcNewsBack.png"
import JS from "../../assets/JS.png";
import GridLayout from "../../assets/GridLayout1.png"
import IndividualArt from "../../assets/IndividualArt1.png"
import NCVID from "../../assets/nc_news.mp4";


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
         This was my first full stack finished project, completed whilst at Northcoders. Over the course of 2 weeks I produced a solid backend complimeted with rigouros testing for all eventualities including 20+ SQL queries and 10+ Restful API's including GET,PATCH,POST and DELETE requests as well as error handling. The front end built in React has dynamin routes and 'useContext' for customised UX as well as exemples of other React Hooks.
          </p>
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
             grid style
            </li>
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >
             
            </li>
            <li
              className="gpblurb"
              style={{ opacity: activeCard === "layout(a)" ? 1 : 0 }}
            >

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
              className="howtoblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
     
            </li>
            <li
              className="howtoblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            
            </li>
            <p
              className="howtoblurb"
              style={{ opacity: activeCard === "layout(b)" ? 1 : 0 }}
            >
            
            </p>
          </section>
          <section
            className="featuresA"
            style={{ zIndex: activeCard === "features(b)" ? 9 : 0,
            opacity: activeCard === "features(b)" ? 1 : 0 }}
          >
            {/* <button className="gotagTop" onClick={() => setActiveCard('gameOver')}>game over</button> */}
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            ></p>
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >
        
            </p>
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >
    
            </p>
            <p
              className="goBlurb"
              style={{ opacity: activeCard === "features(b)" ? 1 : 0 }}
            >
        
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
          <img className="Expo" src={JS}></img>
         
    
        </section>
      </section>
    )

}