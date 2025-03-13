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
        <p>Front-End</p>
            <img className="Stack" src={PHASER}></img>
            <img className="Stack" src={HTML}></img>
            <img className="Stack" src={CSS}></img>
            <img className="Stack" src={REACT}></img>
            <img className="Stack" src={ReactNative}></img>
            <img className="Stack" src={Expo}></img>
            <img className="Stack" src={ExpoGo}></img>
        </section>
        <section className="back"><p>Back-End</p>
            <img className="StackB" src={PG}></img>
            <img className="StackB" src={MongoDB}></img>
            <img className="StackB" src={SQL}></img>
            <img className="StackB" src={Mongoose}></img>
           </section>
        <section className="other"><p>Hosting/Deployment</p>
            <img className="StackB" src={SB}></img>
            <img className="StackB" src={RENDER}></img>
            <img className="StackB" src={Railway}></img>
            <img className="StackB" src={Netlify}></img>
        </section>
        {/* <section className="host"></section>
        <section className="methods"></section> */}
    </section>
  );
}
