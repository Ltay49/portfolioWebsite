import CERT from "../../assets/Lewis-Taylor-certificate.jpeg.jpg";
import PHASER from "../../assets/Phaser.png"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import REACT from "../../assets/React.png"
import ReactNative from "../../assets/ReactNative.png";
import ExpoGo from "../../assets/ExpoGo.png";
import Expo from "../../assets/Expo.png";
import MongoDB from "../../assets/MongoDB.png";
import Mongoose from "../../assets/mongoose.png";
import SQL from "../../assets/sql.png"
import PG from "../../assets/pg.png"
import RENDER from "../../assets/Render.png"
import Netlify from "../../assets/netlify.png";
import Railway from "../../assets/Railway.png";
import SB from "../../assets/supabase.png"
import TS from "../../assets/TS.png";
import JS from "../../assets/JS.png";
import NPM from "../../assets/npm.png"
import NODE from "../../assets/node.png"
import JEST from "../../assets/jest.png"
import Super from "../../assets/supertest.png"

export default function Certs() {
  return (
    <section className="certsAndStacksContainer" id="certification">
      {/* <section className="cert">
        <p className="Certtag">
          Certification of completetion for 'Software Development Bootcamp in
          JavaScript' from Northcoders
        </p>
        <section className="Projbutton">
          <button className="btnPdfStyle">view PDF</button>
        </section>
        <section className="overlay"></section>
        <img className="certPic" src={CERT}></img>
      </section> */}
        <section className="front">
        <p className="stackTitle">Front-End</p>
            <img className="Stack" src={PHASER}></img>
            <img className="Stack" src={HTML}></img>
            <img className="Stack" src={CSS}></img>
            <img className="Stack" src={REACT}></img>
            <img className="Stack" src={ReactNative}></img>
            <img className="Stack" src={Expo}></img>
            <img className="Stack" src={ExpoGo}></img>
        </section>
        <section className="back"><p className="stackTitle">Back-End</p>
            <img className="StackB" src={PG}></img>
            <img className="StackB" src={MongoDB}></img>
            <img className="StackB" src={SQL}></img>
            <img className="StackB" src={Mongoose}></img>
           </section>
        <section className="other"><p className="stackTitle">Hosting/Deployment</p>
            <img className="StackO" src={Railway}></img>
            <img className="StackO" src={Netlify}></img>
            <img className="StackO" src={SB}></img>
            <img className="StackO" src={RENDER}></img>
        </section>
        <section className="others"><p className="stackTitle">Languages/Other</p>
            <img className="StackL" src={TS}></img>
            <img className="StackL" src={JS}></img>
            <img className="StackL" src={NPM}></img>
            <img className="StackL" src={NODE}></img>
            <img className="StackL" src={JEST}></img>
            <img className="StackL" src={Super}></img>
        </section>
        {/* <p className="stackTitle">Methods</p> */}
        <section className="methods">
        <p className="stackTitleM">Methods</p>
            <div className="methodtext">
                <p id="text">Paired progamming
                </p></div>
            <div className="methodtext">
                <p id="text"> TDD</p>
            </div>
            <div className="methodtext">
                <p id="text"> Agile</p>
            </div>
            <div className="methodtext">
            <p id="text">MVC </p>
            </div>
            <div className="methodtext">
            <p id="text">SCRUM
            </p>
            </div>
        </section>
    </section>
  );
}
