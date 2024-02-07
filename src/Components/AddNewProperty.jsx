import axios from 'axios'
import { useEffect, useState } from 'react';
import FilterProperties from './FilterProperties';
import SellerDropDown from './SellerDropDown';

// axios get and axios post for properties
function AddNewProperty() {

  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [postCode, setPostCode] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("")
  const [garden, setGarden] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("For Sale");
  const [sellerId, setSellerId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProperty = {
      prc: price,
      loc: location,
      pcod: postCode,
      beds: bedrooms,
      bath: bathrooms,
      grdn: garden,
      status: propertyStatus,
      seller: {id: sellerId}
    }

    axios.post("http://localhost:8081/properties/create", newProperty)
      .then(response => {

        setPrice("");
        setLocation("");
        setPostCode("");
        setBedrooms("");
        setBathrooms("");
        setGarden("");
        setPropertyStatus("For Sale");
        getProperties();
        setSellerId("")
      })
      .catch(error => console.error(error))
  }

  function getProperties() {
    axios.get("http://localhost:8081/properties/get")
      .then((response) => { setProperties(response.data) })

  }
  useEffect(getProperties, [])

  return (

    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ backgroundColor: "#003b00", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }}>
          <h3 style={{ fontFamily: "monospace" }}>Add a Property</h3>
          <form onSubmit={handleSubmit} className="row gx-3 gy-2" style={{ justifyContent: "center" }}>
            <div style={{ marginTop: "35px" }} class="col-auto">
            </div>

            <div class="col-auto">
              <label>Seller</label>
              <SellerDropDown required value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

              <label for="autoSizingInput">Price</label>
              <input className="form-control" value={price} onChange={event => setPrice(event.target.value)} placeholder="Price" type="text" required></input>

              <label for="autoSizingInput">Location</label>
              <input className="form-control" value={location} onChange={event => setLocation(event.target.value)} placeholder="Location" type="text" required></input>

              <label for="autoSizingInput">Postcode</label>
              <input className="form-control" value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="Post Code" type="text" required></input>
            </div>
            <div class="col-auto">
              <label for="autoSizingInput">Bedrooms</label>
              <input className="form-control" value={bedrooms} onChange={event => setBedrooms(event.target.value)} placeholder="Number of Bedrooms" type="number" min ="1" max="9" required></input>

              <label for="autoSizingInput">Bathrooms</label>
              <input className="form-control" value={bathrooms} onChange={event => setBathrooms(event.target.value)} placeholder="Number of Bathrooms" type="number"  min ="1" max="9" required></input>
              <label htmlFor="">Has a Garden?</label>
              <select className='form-select' value={garden} onChange={(e) => setGarden(e.target.value)} name="" id="" required>
                <option value="">Select an Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <br />
              <button className="form-control" type="submit" style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }}>Submit</button>
            </div>

          </form>

        </div>
      </div>
      <br />

      <div>
        <br />
        <FilterProperties properties={properties} />
      </div>
    </div>

  );
}


export default AddNewProperty;