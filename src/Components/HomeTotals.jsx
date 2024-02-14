import axios from "axios";
import { useEffect, useState } from "react";

// home page totals -  4 axios requests on this page
// array.length?
function HomeTotals() {

    const [buyers, setBuyers] = useState([])
    const [sellers, setSellers] = useState([])
    const [properties, setProperties] = useState([])
    const [bookings, setBookings] = useState([])

    function getBuyers() {
        axios
            .get("/buyers/get")
            .then((response) => {
                setBuyers(response.data)
            })
            .catch(error => console.error(error))
    } useEffect(getBuyers, [])

    function getSellers() {
        axios
            .get("/sellers/get")
            .then((response) => {
                setSellers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getSellers, [])

    function getProperties() {
        axios
            .get("/properties/get")
            .then((response) => {
                setProperties(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getProperties, [])

    function getBookings() {
        axios
            .get("/bookings/get")
            .then((response) => {
                setBookings(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getBookings, [])
// does this .length relate to the json arrays? how will this translate to Spring/ db??
    return (
        <div className="container text-center" >
            <div className="row">
                <div className="col" style={{ backgroundColor: "black", borderRadius: "10px", margin: "5px" }}>
                    <h3>Buyers</h3>
                    <h3>{buyers.length}</h3>
                </div>
                <div className="col" style={{ backgroundColor: "black", borderRadius: "10px", margin: "5px" }}>
                    <h3>Sellers</h3>
                    <h3>{sellers.length}</h3>
                </div>
                <div className="col" style={{ backgroundColor: "black", borderRadius: "10px", margin: "5px" }}>
                    <h3>Properties</h3>
                    <h3>{properties.length}</h3>
                </div>
                <div className="col" style={{ backgroundColor: "black", borderRadius: "10px", margin: "5px" }}>
                    <h3>Bookings</h3>
                    <h3>{bookings.length}</h3>
                </div>
            </div>
        </div>
    );
}

export default HomeTotals;