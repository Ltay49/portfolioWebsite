import ELVideo from "../../assets/EL_Video.mp4";
import NCVID from "../../assets/nc_news.mp4";
import HOWTOPLAY from "../../assets/BarclaysMen.jpeg"
import GAMEPLAY from "../../assets/BarclaysMen 2.jpeg"
import WIN from "../../assets/BarclaysMen 3.jpeg"
import { useState } from "react";

export default function Projects() {

const [projectPage, setProjectPage] = useState(false)

    const newPageHandler = () =>{
        setProjectPage(true)

        if(projectPage){
            setProjectPage(false)
        }
    }

  return (
    <div className="projects">
      { projectPage ? (
        <section className="projectPage">
            <section className="projectText">
                <p className="blurb">This project is a Daily Game, i was inspired by Wordle to produce my own version but with a twist or Cruyf turn if you like... instead of a 5 letter word the objective to guess which Barclaysmen of the day it is. The game has 100+ players in all steming from the Barclays Era of English top flight football with an abundance of iconic players to choose from.  </p>
            </section>
            <section className="projectName">
                <p></p>
            </section>
            <section className="projectVideo">
            <img className="howToPlayPP" src={HOWTOPLAY}></img>
            {/* <img className="gamePlayPP" src={WIN}></img>
            <img className="winPP" src={GAMEPLAY}></img> */}
                <section>
                    <button onClick={newPageHandler}>X</button>
                </section>
            </section>
            <section className="projectStack"></section>
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
