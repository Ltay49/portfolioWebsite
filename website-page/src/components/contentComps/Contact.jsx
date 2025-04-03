
export default function Contact (){

    return(
    <div className="emailBox">
        <p>For all queries and questions please get in touch below.</p>
        <div className="nameBox">
            <div className="nameText">
                <p>Name: </p>
            </div>
            <input className="enterName"
                placeholder = "name here...">
            </input>
            <div className="emailText">
                <p>Email Address: </p>
            </div>
            <input className="enterName"
            placeholder="email here...">
                </input>
        </div>
        <textarea className="emailAdd">
             
            </textarea>

            <button className="sendbtn">Send</button>
    </div>
   )
}