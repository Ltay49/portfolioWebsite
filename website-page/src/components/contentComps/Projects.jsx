import ELVideo from "../../assets/EL_Video.mp4";
import NCVID from "../../assets/nc_news.mp4";
import HOWTOPLAY from "../../assets/BarclaysMen.jpeg"
import GAMEPLAY from "../../assets/BarclaysMen 2.jpeg"
import WIN from "../../assets/BarclaysMen 3.jpeg"
import { useState } from "react";
import LUA from "../../assets/LuaLua.png"
import ExpoGo from "../../assets/ExpoGo.png"
import Expo from "../../assets/Expo.png"
import TS from "../../assets/TS.png"
import JS from "../../assets/JS.png"
import MongoDB from "../../assets/MongoDB.png"
import Mongoose from "../../assets/mongoose.png"
import Netlify from "../../assets/netlify.png"
import Railway from "../../assets/Railway.png"
import ReactNative from "../../assets/ReactNative.png"

export default function Projects() {

const [activeCard, setActiveCard] = useState(null);
const [projectPage, setProjectPage] = useState(false)

    const newPageHandler = () =>{
        setProjectPage(true)

        if(projectPage){
            setProjectPage(false)
        }
    }

  return (
    <div className="projects" id="projects">
      { projectPage ? (
        <section className="projectPage" id="projects">
             <section>
                    <button className="backToProjects" onClick={newPageHandler}>back to projects</button>
                </section>
            <img className="barcBack1" src={LUA}></img>
            {/* <img className="barcBack" src={LUA}></img> */}
            <section className="projectText">
                <p className="projpageBarc">Barclaysmen</p>
                <p className="blurb">This project is a Daily Game, i was inspired by Wordle to produce my own version but with a twist or Cruyf turn if you like... instead of a 5 letter word the objective to guess which Barclaysmen of the day it is. The game has 100+ players in all steming from the Barclays Era of English top flight football with an abundance of iconic players to choose from.  </p>
            </section>
            <section className="projectVideo">
            <img className="howToPlayPP" src={HOWTOPLAY}   style={{ zIndex: activeCard === 'howToPlay' ? 10 : 2 }}></img>
            <img className="gamePlayPP" src={GAMEPLAY} style={{ zIndex: activeCard === 'gamePlay' ? 10 : 3 }}></img>
            <img className="winPP" src={WIN} style={{ zIndex: activeCard === 'gameOver' ? 10 : 1 }}></img>
            <section className="projectGamePlay"  src={WIN} style={{ zIndex: activeCard === 'gamePlay' ? 10 : 3 }}>
            <button className="gptagTop" onClick={() => setActiveCard('gamePlay')}>game play</button>
                <p className="gpblurb">Rapid Api Calls for instant fast flowing game play</p>
                <p className="gpblurb1">Dynamic searchbar for first and surnames</p>
                <p className="gpblurb1">Asynch storgae for custom experience which tracks user progress</p>
                <p className="gpblurb1">Fun and compact styling for UX</p>
                <button className="gptag" onClick={() => setActiveCard('gamePlay')}>game play</button>
            </section>
            <section className="projectHowToPlay" style={{ zIndex: activeCard === 'howToPlay' ? 10 : 2 }}>
            <p className="gpblurb">Rapid Api Calls for instant fast flowing game play</p>
                <p className="gpblurb1">Dynamic searchbar for first and surnames</p>
                <p className="gpblurb1">Asynch storgae for custom experience which tracks user progress</p>
                <p className="gpblurb1">Fun and compact styling for UX</p>
            <button className="howtotagTop" onClick={() => setActiveCard('howToPlay')}>how to play</button>
                <button className="howtotag" onClick={() => setActiveCard('howToPlay')}>how to play</button>
            </section>
            <section className="projectGameOver" style={{ zIndex: activeCard === 'gameOver' ? 10 : 1 }}>
            <button className="gotagTop" onClick={() => setActiveCard('gameOver')}>game over</button>
            <p className="gpblurb">Rapid Api Calls for instant fast flowing game play</p>
                <p className="gpblurb1">Dynamic searchbar for first and surnames</p>
                <p className="gpblurb1">Asynch storgae for custom experience which tracks user progress</p>
                <p className="gpblurb1">Fun and compact styling for UX</p>
                <button className="gotag" onClick={() => setActiveCard('gameOver')}>game over</button>
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
      ):(
        <>
      <section className="project1">
        <h4 className="Projtitle" id="NCtext">
          NC News
        </h4>
        <p className="Projtag">'endpoints galore'</p>
        <section className="Projbutton">
          <button className="btnStyle" onClick={newPageHandler}>learn more here!</button>
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
          <button className="btnStyle" onClick={newPageHandler}>learn more here!</button>
        </section>
        <video className="hoverVideo" src={ELVideo} autoPlay loop muted></video>
      </section>
      <section className="project3">
        <h4 className="Projtitle" id="BCtext">
          Barclaysmen
        </h4>
        <p className="Projtag">'Okocha! Viduka! Lua Lua!'</p>
        <section className="Projbutton">
          <button className="btnStyle" onClick={newPageHandler}>learn more here!</button>
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
