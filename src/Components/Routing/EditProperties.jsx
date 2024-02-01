
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
// Edit properties axios - get and patch
function EditProperties() {

    const navigate = useNavigate();
    const params = useParams();

    // const [properties, setproperties] = useState([])
    const [price, setPrice] = useState ("");
    const [location, setLocation] = useState ("");
    const [postcode, setPostcode] = useState ("");
    const [bedrooms, setBedrooms] = useState ("");
    const [bathrooms, setBathrooms] = useState ("");
    const [garden, setGarden] = useState ("");
    const [propertyStatus, setPropertyStatus] = useState ("");

    // function propertyInfo() {

    useEffect(() => {
    axios.get("http://localhost:3030/properties/" + params.id)
    .then((res) => {
        console.log(res);
        setPrice(res.data.prc);
        setLocation(res.data.loc);
        setPostcode(res.data.pcod);
        setBedrooms(res.data.beds);
        setBathrooms(res.data.bath);
        setGarden(res.data.grdn);
        setPropertyStatus(res.data.status);
    }).catch(error => console.error(error));
  }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    

    axios.patch("http://localhost:3030/properties/" + params.id, { prc: price , loc: location, pcod: postcode, beds: bedrooms, bath: bathrooms, grdn: garden, status: propertyStatus})
        .then(() => {
            navigate("/properties")

        }).catch(error => console.error(error))
    }


return(

    <>
    <h1 style={{ color: "purple", fontFamily: "monospace", textTransform: "capitalize", fontSize: "65px", marginTop: "50px", textAlign: "center" }}>Edit Property</h1>
<form onSubmit={handleSubmit} className="row gx-3 gy-2" style={{ justifyContent: "center", marginTop: "20px"}}>
<div className='row' style={{ backgroundColor: "purple", borderRadius: "15px", color: "white", padding: "30px", width: "50%", margin: "auto", justifyContent: "center" }}> 
<div class="col-auto">
    <label for="autoSizingInput">Price</label>
    <input className="form-control" onChange={event => setPrice(event.target.value)} type="text" id="price" value={price}/>

    <label for="autoSizingInput">Location</label>
    <input className="form-control" onChange={event => setLocation(event.target.value)} type="text" id="location" name="location" value={location}/>

    <label for="autoSizingInput">Postcode</label>
    <input className="form-control" onChange={event => setPostcode(event.target.value)} type="text" id="postcode" name="postcode" value={postcode}/>
    
    <label for="autoSizingInput">Property Status</label>
    <select className="form-select" name="garden" onChange={(e) => setPropertyStatus(e.target.value)} value={propertyStatus} id="bathrooms">
        <option value="">Select an Option</option>
        <option value="For Sale">For Sale</option>
        <option value="Sold">Sold</option>
        <option value="Withdrawn">Withdrawn</option>
    </select>
</div>
<div class="col-auto">
    <label for="autoSizingInput">Bedrooms</label>
    <input className="form-control" onChange={event => setBedrooms(event.target.value)} type="number" id="bedrooms" name="bedrooms"  value={bedrooms}/>

    <label for="autoSizingInput">Bathrooms</label>
    <input className="form-control" onChange={event => setBathrooms(event.target.value)} type="number" id="bathrooms" name="bathrooms" value={bathrooms}/>

    <label for="autoSizingInput">Garden</label>
    {/* <input className="form-control" type="text" name="garden" value={garden} onChange={(e) => setGarden(e.target.value)} required/> */}
    <select className="form-select" name="garden" onChange={(e) => setGarden(e.target.value)} value={garden} id="bathrooms">
        <option value="">Select an Option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
    <br />  
    <button style={{ color: "white", fontWeight: "bold", backgroundColor: "#984da2", marginLeft:"30px",  width: "75%" }} className='form-control' type="" >Submit</button>
    <br />
    
</div>
</div>
</form>
</>
   )

}


export default EditProperties;