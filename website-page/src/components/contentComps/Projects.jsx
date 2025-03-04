import ELVideo from "../../assets/EL_Video.mp4"


export default function Projects (){

    return (
        <div className="projects">
            <section className="project1"></section>
            <section className="project2">
                <div className="clipHalf">
                <video id="hoverVideo" src={ELVideo} autoPlay loop muted></video>
                </div>
                <div className="contentHalf"></div>
            </section>
            <section className="project3"></section>
            <section className="project4"></section>
        </div>
    )
}