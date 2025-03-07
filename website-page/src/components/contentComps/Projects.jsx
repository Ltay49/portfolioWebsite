import ELVideo from "../../assets/EL_Video.mp4";
import NCVID from "../../assets/nc_news.mp4";

export default function Projects() {
  return (
    <div className="projects">
      <section className="project1">
        <h4 className="Projtitle" id="NCtext">
          NC News
        </h4>
        <p className="Projtag">'endpoints galore'</p>
        <section className="Projbutton">
          <button className="btnStyle">learn more here!</button>
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
          <button className="btnStyle">learn more here!</button>
        </section>
        <video className="hoverVideo" src={ELVideo} autoPlay loop muted></video>
      </section>
      <section className="project3">
        <h4 className="Projtitle" id="BCtext">
          Barclaysmen
        </h4>
        <p className="Projtag">'Okocha! Viduka! Lua Lua!'</p>
        <section className="Projbutton">
          <button className="btnStyle">learn more here!</button>
        </section>
      </section>
    </div>
  );
}
