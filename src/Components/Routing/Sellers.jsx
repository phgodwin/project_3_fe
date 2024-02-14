import axios from "axios";
// installed axios (npm install axios) and then imported

//creating sellers - AXIOS GET AND AXIOS POST
import { useEffect, useState } from "react";
import Seller from "../Seller";



function Sellers() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [emailAdd, setEmailAdd] = useState("");
    const [sellers, setSellers] = useState([])
    const sellerComponent = []


    function getSellers() {
        axios
            .get("/sellers/get")
            .then((response) => {
                setSellers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getSellers, [])

    for (let seller of sellers) {
        sellerComponent.push(
            <Seller
                firstName={seller.firstName}
                lastName={seller.lastName}
                postCode={seller.postCode}
                phoneNum={seller.phoneNum}
                emailAdd={seller.emailAdd}
                id={seller.id}
                getSellers={getSellers}
            />)
    }


    const handleSubmit = event => {
        event.preventDefault();

        for (let seller of sellers) {
            if (firstName.toLowerCase() === seller.firstName.toLowerCase() && lastName.toLowerCase() === seller.lastName.toLowerCase()) {
                alert("Seller already exists");
                return
            } else {
                console.log("Submitted");
            }
        }

        axios.post("/sellers/create", { firstName, lastName, postCode, phoneNum, emailAdd })


            .then(response => {
                setFirstName("");
                setLastName("");
                setPostCode("");
                setPhoneNum("");
                setEmailAdd("");
                getSellers()
            })
            .catch(error => console.error(error))

    }
    return (




        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <br />
            <h1 style={{ color: "white", fontFamily: "monospace", textTransform: "capitalize", fontSize: "65px" }}>Sellers Page</h1>
            <div style={{ backgroundColor: "#003b00", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }} >

                <h3 style={{ color: "white", fontFamily: "monospace" }}>Add a Seller</h3>
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
                        <button className="form-control" type="submit" style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }}>Submit</button>
                    </div>
                </form>

            </div>

            {/* basic table that will eventually display the data */}

            <br></br>
            <br></br>
            <br></br>


            <div className="col-auto">
                <table className="table table-bordered, " style={{ color: 'white', backgroundColor: "#003b00", textAlign: "center", marginSide: "15%" }}>

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
                        {sellerComponent}
                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default Sellers;