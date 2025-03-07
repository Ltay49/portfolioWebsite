import CERT from "../../assets/Lewis-Taylor-certificate.jpeg.jpg"
export default function Certs(){


    return(

        <section  className="certsAndStacksContainer" id="certification">
                <section className="cert">
                    <section className="overlay"></section>
                    <p className="certText">Certification of completetion for 'Software Development Bootcamp in JavaScript' from Northcoders</p>
                    <img className="certPic" src={CERT}></img>
                </section>
                <section className="stacks"></section>
        </section>
    )
}