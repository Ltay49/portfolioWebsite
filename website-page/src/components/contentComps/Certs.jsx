import CERT from "../../assets/Lewis-Taylor-certificate.jpeg.jpg";
export default function Certs() {
  return (
    <section className="certsAndStacksContainer" id="certification">
      <section className="cert">
        <p className="Certtag">
          Certification of completetion for 'Software Development Bootcamp in
          JavaScript' from Northcoders
        </p>
        <section className="Projbutton">
          <button className="btnPdfStyle">view PDF</button>
        </section>
        <section className="overlay"></section>
        <img className="certPic" src={CERT}></img>
      </section>
      <section className="stacks"></section>
    </section>
  );
}
