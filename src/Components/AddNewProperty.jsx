import Property from './Property';
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
  const [propertyStatus, SetPropertyStatus] = useState("For Sale");
  const [sellerName, setSellerName] = useState("");




  function handleSubmit(event) {
    event.preventDefault();

    const newProperty = {
      sellnme: sellerName,
      prc: price,
      loc: location,
      pcod: postCode,
      beds: bedrooms,
      bath: bathrooms,
      grdn: garden,
      status: propertyStatus
    }


    axios.post("http://localhost:3030/properties", newProperty)
      .then(response => {


        setPrice("");
        setLocation("");
        setPostCode("");
        setBedrooms("");
        setBathrooms("");
        setGarden("");
        SetPropertyStatus("For Sale");
        setSellerName("");
        getProperties();
      })
      .catch(error => console.error(error))
  }


  function getProperties() {
    axios.get("http://localhost:3030/properties")
      .then((response) => { setProperties(response.data) })

  }
  useEffect(getProperties, [])



  const newComponents = []
  for (let created of properties) {
    newComponents.push(
      <Property
        key={created.prc + "" + created.loc}
        prc={created.prc}
        pcod={created.pcod}
        loc={created.loc}
        beds={created.beds}
        bath={created.bath}
        grdn={created.grdn}
        propertyStatus={created.status}
        sellnme={created.sellnme}

      />
    )
  };


  return (

    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ backgroundColor: "purple", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }}>
          <h3 style={{ fontFamily: "monospace" }}>Add a Property</h3>
          <form onSubmit={handleSubmit} className="row gx-3 gy-2" style={{ justifyContent: "center" }}>
            <div style={{ marginTop: "35px" }} class="col-auto">


            </div>


            <div class="col-auto">
              <label>Seller</label>
              <SellerDropDown required value={sellerName} onChange={(e) => setSellerName(e.target.value)} />

              <label for="autoSizingInput">Price</label>
              <input className="form-control" value={price} onChange={event => setPrice(event.target.value)} placeholder="Price" type="text" required></input>

              <label for="autoSizingInput">Location</label>
              <input className="form-control" value={location} onChange={event => setLocation(event.target.value)} placeholder="Location" type="text" required></input>

              <label for="autoSizingInput">Postcode</label>
              <input className="form-control" value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="Post Code" type="text" required></input>
            </div>
            <div class="col-auto">
              <label for="autoSizingInput">Bedrooms</label>
              <input className="form-control" value={bedrooms} onChange={event => setBedrooms(event.target.value)} placeholder="Number of Bedrooms" type="number" max="4" required></input>

              <label for="autoSizingInput">Bathrooms</label>
              <input className="form-control" value={bathrooms} onChange={event => setBathrooms(event.target.value)} placeholder="Number of Bathrooms" type="number" max="4" required></input>
              <label htmlFor="">Has a Garden?</label>
              <select className='form-select' value={garden} onChange={(e) => setGarden(e.target.value)} name="" id="" required>
                <option value="">Select an Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <br />
              <button style={{ margin: "auto", width: "50%", alignItems: "center", color: "white", fontWeight: "bold", backgroundColor: "#984da2" }} className="btn btn-primary " type="submit" >Submit</button>

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