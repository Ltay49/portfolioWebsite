import Everton from "../../assets/Everton.jpeg"
import Nc from "../../assets/NC.png"
import Me from "../../assets/Me.png"
export default function AboutMe() {
    return(
        <div className="aboutMeContentContainer">
       <section className="imagePlaceholder">
        <img className="meImg" src={Me}></img>
       </section>
            <section className="textPlaceholder">
            <section className="JobBlulrb">
                {/* <h3>Experience</h3> */}
                <p>Hi i'm Lewis, i'm junior full stack developer with a background in construction. Professionaly i have experience in Analtyics for the NHS as well 6 years in construction management, running some of the largest builds in North West. Ultiately i needed a change in order to fullfill my drive for learning and a vessell to channel my creativity. </p>
                <p>The start of this jounrey has begun through self drive to learn indpedalty(something that still fuels me!) and the completion of Northcoders Software Development Bootcamp. I am continuing to use the skills, languages and practices learned to dewvelop my perosnal projects whilst i seek employment in the field.</p>
                <p></p>
                {/* <p>1 years experience in the NHS data team working with:
                    <li>sql</li>
                    <li>pas</li>
                    <li>excell</li>
                </p> 
                <p>6 years experience of management in the construction industry acheivemnts and roles include:
                <li>New Everton Stadium</li>
                <li>Repsonible for H&S and Quality of up to 50 operatives</li>
                <li>Controll of deadlines, programmes and budgets</li>
                </p>  */}
            </section>
            {/* <img className="NcImg" src={Nc}></img> */}
            {/* <img className="EveImg" src={Everton}></img> */}
            </section>
        
            {/* <section className="textPlaceholder">
            <img className="NcImg" src={Nc}></img>
            <section className="NcBlulrb">
                <h3>Northcoders</h3>
                <p>1 years experience in the NHS data team working with:
                    <li>sql</li>
                    <li>pas</li>
                    <li>excell</li>
                </p> 
                <p>6 years experience of management in the construction industry acheivemnts and roles include:
                <li>New Everton Stadium</li>
                <li>Repsonible for H&S and Quality of up to 50 operatives</li>
                <li>Controll of deadlines, programmes and budgets</li>
                </p> 
            </section>
            </section>
            <section className="textPlaceholder">
            <img className="EveImg" src={Everton}></img>
            <li>Northcoders</li>
            <li></li>
            </section> */}
        </div>
    )
  }