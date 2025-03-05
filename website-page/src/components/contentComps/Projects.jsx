import ELVideo from "../../assets/EL_Video.mp4"
import NCVID from "../../assets/nc_news.mp4"


export default function Projects (){

    return (
        <div className="projects">
            <section className="project1">
                <h4 className="Projtitle">NC News</h4>
                <p className="Projtag">'endpoints galore'</p>
                <p className="Projbutton">learn more here!</p>
                <div className="overlay"></div>
            <video className="hoverVideo" src={NCVID} autoPlay loop muted></video>
            </section>
            
            <section className="project2">
            <div className="overlay"></div>
            <h4 className="Projtitle">EuroLingo</h4>
            <p className="Projtag">'europe under one roof'</p>
            <p className="Projbutton">learn more here!</p>
                <video className="hoverVideo" src={ELVideo} autoPlay loop muted></video>
            </section>
            <section className="project3">
            <h4 className="Projtitle">Barclaysmen</h4>
            <p className="Projtag">'Okocha! Viduka! Lua Lua!'</p>
            <p className="Projbutton">learn more here!</p>
            </section>
        </div>
    )
}