import Everton from "../../assets/Everton.jpeg"
import Nc from "../../assets/NC.png"
import Me from "../../assets/Me.png"
import { useState } from "react";

export default function AboutMe() {

    const [activeCard, setActiveCard] = useState("hello");

    return(
        <div className="aboutMeContentContainer">
       <section className="imagePlaceholder">
        <img className="meImg" src={Me}></img>
       </section>
            <section className="textPlaceholder">
            <section className="JobBlulrb"
            >
                <p
                 style={{
                    opacity: activeCard === "hello" ? "1" : "0",
                  }}>"Hi I'm Lewis, I'm a junior full stack developer with a background in construction. Professionally, I have experience in data analytics for the NHS as well as 6 years in construction management, where I ran some of the largest builds in the North-West. Ultimately, I needed a change in order to fulfill my passion for learning and find a vessel to channel my creativity." </p>
            </section>
            <section className="JobBlulrb1">
            <p   style={{
                    opacity: activeCard === "more" ? "1" : "0",
                  }}>"The start of my journey as developer began when I purchased several Jon Duckett books and culminated with the completion of the Northcoders Software Development Bootcamp in January 2025. I am continuing to use the skills, languages and practices learned to develop my personal projects whilst I seek employment in the field. "</p>
       </section>
       <section className="nextSlide">
        <button className="nextSlideBtn"
              style={{
                backgroundColor: activeCard === "hello" ? "#0063A1" : "white",
              }}
           onClick={() => setActiveCard("hello")}></button>
        <button className="nextSlideBtn1"
             style={{
                backgroundColor: activeCard === "more" ? "#0063A1" : "white",
              }}
           onClick={() => setActiveCard("more")}
           ></button>
    </section>
            </section>
   
        </div>
    )
  }