import { useState, useEffect } from "react";
import axios from "axios";
// Adding a property -- PROPERTY axios get AND  axios post
const AddProperty = () => {

    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [postcode, setPostcode] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [garden, setGarden] = useState("");
    const [newlyCreated, setNewlyCreated] = useState([]);


    function getProperties() {
        axios.get("http://localhost:3030/properties")
            .then((response) => { setNewlyCreated(response.data) })
            .catch(error => console.error(error))
    }
    useEffect(getProperties, [])

    const newComponents = []
    for (let created of newlyCreated) {
        newComponents.push(

            <p>Price: {created.prc}</p>,
            <p>Location: {created.loc}</p>,
            <p>Post Code: {created.pcod}</p>,
            <p>Number of Bedrooms: {created.beds}</p>,
            <p>Number of Bathrooms: {created.bath}</p>,
            <p>Garden: {created.grdn}</p>,
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newProperty = {
            prc: price,
            loc: location,
            pcod: postcode,
            beds: bedrooms,
            bath: bathrooms,
            grdn: garden,
        }

        axios.post("http://localhost:3030/properties", newProperty)

            .then((response) => {
                const newData = newlyCreated

                newData.push(newProperty)

                setNewlyCreated(newData)
                console.log(response);
                setPrice("");
                setLocation("");
                setPostcode("");
                setBedrooms("");
                setBathrooms("");
                setGarden("");


            })

            .catch((err) => console.error(err));

    }




    return (
        <div>
            <h2>Add new property</h2>
            <br />
            <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

                <div class="col-auto">
                    <label for="autoSizingInput">Price</label>
                    <input className="form-control" type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

                    <label for="autoSizingInput">Location</label>
                    <input className="form-control" type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />

                    <label for="autoSizingInput">Postcode</label>
                    <input className="form-control" type="text" name="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} required />
                </div>
                <div class="col-auto">
                    <label for="autoSizingInput">Bedrooms</label>
                    <input className="form-control" type="number" name="bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required />

                    <label for="autoSizingInput">Bathrooms</label>
                    <input className="form-control" type="number" name="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />

                    <label for="autoSizingInput">Garden</label>
                    {/* <input className="form-control" type="text" name="garden" value={garden} onChange={(e) => setGarden(e.target.value)} required/> */}
                    <select className="form-select" name="garden" value={garden} onChange={(e) => setGarden(e.target.value)} required>
                        <option value="">Select an Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <button className="btn btn-primary" type="submit" >Submit</button>

                </div>
            </form>

        </div>
    )
}

export default AddProperty;