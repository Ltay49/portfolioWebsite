import ELVideo from "../../assets/EL_Video.mp4";
import NCVID from "../../assets/nc_news.mp4";
import HOWTOPLAY from "../../assets/BarclaysMen.jpeg";
import GAMEPLAY from "../../assets/BarclaysMen 2.jpeg";
import WIN from "../../assets/BarclaysMen 3.jpeg";
import { useState } from "react";
import LUA from "../../assets/LuaLua.png";
import ExpoGo from "../../assets/ExpoGo.png";
import Expo from "../../assets/Expo.png";
import TS from "../../assets/TS.png";
import JS from "../../assets/JS.png";
import MongoDB from "../../assets/MongoDB.png";
import Mongoose from "../../assets/mongoose.png";
import Netlify from "../../assets/netlify.png";
import Railway from "../../assets/Railway.png";
import ReactNative from "../../assets/ReactNative.png";
import NcProject from "./NcProject";

export default function Projects() {
  const [activeCard, setActiveCard] = useState("gamePlay");
  const [projectPageB, setProjectPageB] = useState(false);
  const [projectPageNc, setProjectPageNc] = useState(false);

  const newPageHandlerB = () => {
    setProjectPageB(true);

    if (projectPageB) {
      setProjectPageB(false);
    }
  };

  const newPageHandlerNc = () => {
    setProjectPageNc(true);

    if (projectPageB) {
      setProjectPageNc(false);
    }
  };

  return (
    <div className="projects" id="projects">
      {projectPageB ? (
        <section className="projectPage" id="projects">
          <section>
            <button className="backToProjects" onClick={newPageHandlerB}>
              back to projects
            </button>
          </section>
          <img className="barcBack1" src={LUA}></img>
          {/* <img className="barcBack" src={LUA}></img> */}
          <section className="projectText">
            <p className="projpageBarc">Barclaysmen</p>
            <p className="blurb">
              This project is a daily game. I was inspired by Wordle to produce
              my own version, but with a twist (or Cruyff turn, if you like).
              Instead of a 5-letter word, the objective is to guess which
              Barclaysman of the day it is. The game has 100+ players in all,
              stemming from the Barclays era of English top-flight football,
              with an abundance of iconic players to choose from. Each day, a
              new time-stamped player is fetched, ensuring all users have the
              same player to guess
            </p>
          </section>
          <section className="projectVideo">
            <button
              className="gptag"
              style={{
                border: activeCard === "gamePlay" ? "black solid 1px" : "none",
              }}
              onClick={() => setActiveCard("gamePlay")}
            >
              game play
            </button>
            <button
              className="howtotag"
              style={{
                border: activeCard === "howToPlay" ? "black solid 1px" : "none",
                // opacity: activeCard === "howToPlay" ? "1" : "0.5"
              }}
              onClick={() => setActiveCard("howToPlay")}
            >
              how to play
            </button>
            <button
              className="gotag"
              style={{
                border: activeCard === "gameOver" ? "black solid 1px" : "none",
              }}
              onClick={() => setActiveCard("gameOver")}
            >
              game over
            </button>
            <img
              className="howToPlayPP"
              src={HOWTOPLAY}
              style={{ zIndex: activeCard === "howToPlay" ? 10 : 0 }}
            ></img>
            <img
              className="winPP"
              src={WIN}
              style={{ zIndex: activeCard === "gameOver" ? 10 : 0 }}
            ></img>
            <img
              className="gamePlayPP"
              src={GAMEPLAY}
              style={{ zIndex: activeCard === "gamePlay" ? 10 : 0 }}
            ></img>
            <section
              className="projectGamePlay"
              //   src={WIN}
              //   style={{ zIndex: activeCard === "gamePlay" ? 10 : 0 }}
            >
              <li
                className="gpblurb"
                style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
              >
                Rapid Api calls for instant fast flowing game play
              </li>
              <li
                className="gpblurb"
                style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
              >
                Dynamic searchbar for first and surnames
              </li>
              <li
                className="gpblurb"
                style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
              >
                Async storgae for custom experience which tracks user progress
              </li>
              <li
                className="gpblurb"
                style={{ opacity: activeCard === "gamePlay" ? 1 : 0 }}
              >
                Fun and compact styling for UX
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
                Breakdown of the rules and how to interprate the stats shown
              </li>
              <li
                className="howtoblurb"
                style={{ opacity: activeCard === "howToPlay" ? 1 : 0 }}
              >
                A range of styling techniques are used, which ensure all
                elements are deliberately placed
              </li>
              <p
                className="howtoblurb"
                style={{ opacity: activeCard === "howToPlay" ? 1 : 0 }}
              >
                In-play game styling, providing continuity and
                establishing a consistent theme
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
                Clear styling and custom alerts for winning or losing
              </p>
              <p
                className="goBlurb"
                style={{ opacity: activeCard === "gameOver" ? 1 : 0 }}
              >
                Countdown shown for when the next round will be available
              </p>
              <p
                className="goBlurb"
                style={{ opacity: activeCard === "gameOver" ? 1 : 0 }}
              >
                On page visability a function will run to determine if the user
                is still timed out or if it's time for the next round
              </p>
            </section>
          </section>
          <section className="projectStack">
            <p className="stackText">Stack</p>
            <img className="Expo" src={ExpoGo}></img>
            <img className="Expo" src={Expo}></img>
            <img className="Expo" src={TS}></img>
            <img className="Expo" src={JS}></img>
            <img className="Expo" src={MongoDB}></img>
            <img className="Expo" src={Mongoose}></img>
            <img className="Expo" src={Railway}></img>
            <img className="Expo" src={Netlify}></img>
            <img className="Expo" src={ReactNative}></img>
          </section>
        </section>
      ) : projectPageNc ?(
        <NcProject projectPageNc={projectPageNc} setProjectPageNc={setProjectPageNc}/>
       ) : (
        <>
          <section className="project1">
            <h4 className="Projtitle" id="NCtext">
              NC News
            </h4>
            <p className="Projtag">'endpoints galore'</p>
            <section className="Projbutton">
              <button className="btnStyle" onClick={newPageHandlerNc}>
                learn more here!
              </button>
            </section>
            <div className="overlay"></div>
            <video
              className="hoverVideo"
              src={NCVID}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            ></video>
          </section>
          <section className="project2">
            <div className="overlay"></div>
            <h4 className="Projtitle" id="ELtext">
              EuroLingo
            </h4>
            <p className="Projtag">'europe under one roof'</p>
            <section className="Projbutton">
              {/* <button className="btnStyle" onClick={newPageHandler}>
                learn more here!
              </button> */}
            </section>
            <video
              className="hoverVideo"
              src={ELVideo}
              autoPlay
              loop
              muted
            ></video>
          </section>
          <section className="project3">
            <h4 className="Projtitle" id="BCtext">
              Barclaysmen
            </h4>
            <p className="Projtag">'Okocha! Viduka! Lua Lua!'</p>
            <section className="Projbutton">
              <button className="btnStyle" onClick={newPageHandlerB}>
                learn more here!
              </button>
            </section>
            <img className="howToPlay" src={HOWTOPLAY}></img>
            <img className="gamePlay" src={WIN}></img>
            <img className="win" src={GAMEPLAY}></img>
          </section>
        </>
      )}
    </div>
  );
}
