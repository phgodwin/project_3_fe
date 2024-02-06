// Bookings.jsx

// Axios -Bookings - get and post
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BuyerDropDown from '../BuyerDropDown';
import Booking from '../Booking';
import {useParams } from "react-router-dom";


function Bookings() {

    const [bookings, setBookings] = useState ([]);
    const [date, setDate] = useState ("");
    const [time, setTime] = useState ("");
    const [buyerName, setBuyerName] = useState ("");
    const params = useParams();
    const bookingComponent = []


    function getBookings() {
        axios
            .get("http://localhost:8081/properties/get/"  + params.id )
            .then((response) => {
                setBookings(response.data.bookings)
            })
            .catch(error => console.error(error))
    }
    useEffect(getBookings, [])

    
    for (let booking of bookings) {
        
        bookingComponent.push(
            <Booking
                time={booking.time}
                date={booking.date}
                buyerName={booking.buyerName}
                id={booking.id}
                getBookings={getBookings}
            />)
    }


    const handleSubmit=(e) => {
        e.preventDefault();
        
        for (let booking of bookings) {
            if (time === booking.time && date === booking.date) {
               alert("Booking already exists");
               return
            } else {
                console.log("Submitted");
            }
        }

        axios.post("http://localhost:8081/bookings/create", { date, time, buyer:{id:buyerName}, property: {id:params.id}}
        
        )
        .then(response => {
            setDate("");
            setTime("");   
            setBuyerName("");
            getBookings()
        })
        .catch(error => console.error(error))

    } 
    return(
        <>
<div style={{ backgroundColor: "#003b00", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }} ></div>
        <form onSubmit={handleSubmit} style={{marginTop: "50px", width: "20%", marginLeft: "20px"}} >
            <input onChange={(e) => setDate (e.target.value)} value={date} type="date" name="bookings" id="bookings" className="form-control"/>
            <br />
            <select onChange={(e) => setTime (e.target.value)} value={time} name="timeslot" id="timeslot" className="form-select">
            <option value="">Select Time</option>
                <option value="8:00 - 9:00">8:00 - 9:00</option>
                <option value="9:00 - 10:00">9:00 - 10:00</option>
                <option value="10:00 - 11:00">10:00 - 11:00</option>
                <option value="11:00 - 12:00">11:00 - 12:00</option>
                <option value="12:00 - 13:00">12:00 - 13:00</option>
                <option value="13:00 - 14:00">13:00 - 14:00</option>
                <option value="14:00 - 15:00">14:00 - 15:00</option>
                <option value="15:00 - 16:00">15:00 - 16:00</option>
                <option value="16:00 - 17:00">16:00 - 17:00</option>
            </select>
        
            <br />
            <BuyerDropDown value={buyerName} onChange={(e) => setBuyerName (e.target.value)} className="form-control"/>
            <br />
            <br />
            <button style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }} type='submit'>Submit</button>
        </form >
        <div/>
        <br />

        <table className="table table-bordered" style={{ textAlign: "center", marginSide: "15%" }}>
                <thead className="table-dark" id="table-color">
                    <tr>
                        <th>Buyer</th>
                        <th>Date</th>
                        <th>Time slot</th>
                        <th>Remove Booking</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                   {bookingComponent} 
                </tbody>
            </table>

        </>

        

    )
   
}


export default Bookings