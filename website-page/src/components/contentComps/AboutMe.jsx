import Everton from "../../assets/Everton.jpeg"
import Nc from "../../assets/NC.png"
export default function AboutMe() {
    return(
        <div className="aboutMeContentContainer">
       <section className="textPlaceholder">
       </section>
            <section className="textPlaceholder">
            <section className="JobBlulrb">
                <h3>Experience</h3>
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
            <img className="EveImg" src={Everton}></img>
            </section>
        
            <section className="textPlaceholder">
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
            </section>
        </div>
    )
  }