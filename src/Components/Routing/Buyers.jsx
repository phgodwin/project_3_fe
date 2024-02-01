import axios from "axios";
// installed axios (npm install axios) and then imported
import { useEffect, useState } from "react";
import Buyer from "../Buyer"; 
// CHILD USING PROPS
// axios get and axios post for buyer

function Buyers() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [emailAdd, setEmailAdd] = useState("");
    const [buyers, setBuyers] = useState([])
    const buyerComponent = []


    function getBuyers() {
        axios
            .get("http://localhost:3030/buyers")
            .then((response) => {
                setBuyers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getBuyers, [])

    for (let buyer of buyers) {
        buyerComponent.push(
            <Buyer
                firstName={buyer.firstName}
                lastName={buyer.lastName}
                postCode={buyer.postCode}
                phoneNum={buyer.phoneNum}
                emailAdd={buyer.emailAdd}
            />)
    }


    const handleSubmit = event => {
        event.preventDefault();


        for (let buyer of buyers) {
            if (firstName.toLowerCase() === buyer.firstName.toLowerCase() && lastName.toLowerCase() === buyer.lastName.toLowerCase()) {
                alert("Buyer already exists");
                return
            } else {
                console.log("Submitted");
            }
        }



        axios.post("http://localhost:3030/buyers", { firstName, lastName, postCode, phoneNum, emailAdd })


            .then(response => {
                setFirstName("");
                setLastName("");
                setPostCode("");
                setPhoneNum("");
                setEmailAdd("");
                getBuyers()
            })
            .catch(error => console.error(error))


    }
    return (




        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <br />
            <h1 style={{ color: "purple", fontFamily: "monospace", textTransform: "capitalize", fontSize: "65px" }}>Buyers page</h1>
            <div style={{ backgroundColor: "purple", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }} >
                <h3 style={{ color: "white", fontFamily: "monospace" }}>Add a Buyer</h3>
                <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

                    {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
                    <div class="col-auto">
                        <label for="autoSizingInput">First Name</label>
                        <input className="form-control" value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="First Name" type="text" required></input>

                        <label for="autoSizingInput">Last Name</label>
                        <input className="form-control" value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Last Name" type="text" required></input>

                        <label for="autoSizingInput">Postcode</label>
                        <input className="form-control" value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="Post Code" type="text" required></input>
                    </div>
                    <div class="col-auto">
                        <label for="autoSizingInput">Phone Number</label>
                        <input className="form-control" value={phoneNum} onChange={event => setPhoneNum(event.target.value)} placeholder="Phone Number" type="tel" required></input>

                        <label for="autoSizingInput">Email Address</label>
                        <input className="form-control" value={emailAdd} onChange={event => setEmailAdd(event.target.value)} placeholder="Email Address" type="email" required></input>

                        <br />
                        <button variant='primary' className="form-control" type="submit" color="primary" style={{ color: "white", fontWeight: "bold", backgroundColor: "#984da2" }}>Submit</button>
                    </div>
                </form>

            </div>

            {/* basic table that will eventually display the data */}
            <br />
            <br />
            <br />

            <table className="table table-bordered, " style={{ color: 'white', backgroundColor: 'purple', textAlign: "center", marginSide: "15%" }}>
                <thead className="table-dark" id="table-color">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Post Code</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {buyerComponent}
                </tbody>
            </table>
        </div >

    )
}

export default Buyers;