import ELVideo from "../../assets/EL_Video.mp4"


export default function Projects (){

    return (
        <div className="projects">
            <section className="project1"></section>
            <section className="project2">
                <div className="clipHalf">
                <video id="hoverVideo" src={ELVideo} autoPlay loop muted></video>
                </div>
                <div className="contentHalf">
                    <p className="ELText"> EuroLingo - 'Europe Under One Roof', is an interactive language learning game aimed more specifically for children but contains a bonus level for more advanced learners. This was a collaborative process, our team consisted of many European speakers which ultimately inspired our MVP. Please feel free to check it out here by clicking one of the below links...</p>
                </div>
            </section>
            <section className="project3"></section>
            <section className="project4"></section>
        </div>
    )
}