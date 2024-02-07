import { useState, useEffect } from "react";
import Property from "./Property";
import axios from "axios";
// no axios on this page - are we moving filtering logic to Spring?
function FilterProperties(props) {
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [bathFilter, setBathFilter] = useState("");
  const [bedFilter, setBedFilter] = useState("");
  const [gardenFilter, setGardenFilter] = useState("");
  const [propertyStatus, setPropertyStatusFilter] = useState("");

  

  const propertyComponents = [];

  for (const property of props.properties) {
    if (
      (locationFilter &&
        !property.loc.toLowerCase().startsWith(locationFilter.toLowerCase())) ||
      (bedFilter &&
        !property.beds.toLowerCase().startsWith(bedFilter.toLowerCase())) ||
      (priceFilter && property.prc !== priceFilter) ||
      (bathFilter && property.bath !== bathFilter) ||
      (gardenFilter &&
        !property.grdn.toLowerCase().startsWith(gardenFilter.toLowerCase())) ||
        (propertyStatus && property.status !== propertyStatus) 
    
    ) {
      continue;
    }

    console.log("Property:", property);
    propertyComponents.push(
      <Property
        key={property.id}
        prc={property.prc}
        pcod={property.pcod}
        loc={property.loc}
        beds={property.beds}
        bath={property.bath}
        grdn={property.grdn}
        id={property.id}
        status={property.status}
        sellerName={property.sellerName}
      />
    );
  }


  function handleLocationFilter(event) {
    setLocationFilter(event.target.value);
    console.log("Bedroom Handler:");
  }

  function handleBathFilter(event) {
    setBathFilter(event.target.value);
    console.log("Bathroom Handler:", event.target.value);
  }

  function handleBedFilter(event) {
    setBedFilter(event.target.value);
    console.log("Bedroom Handler:");
  }

  function handleGardenFilter(event) {
    setGardenFilter(event.target.value);
    console.log("Garden Handler:");
  }

  function handlePriceFilter(event) {
    setPriceFilter(event.target.value);
    console.log("Price Handler:");
  }

  function handleStatusFilter(event) {
    setPropertyStatusFilter(event.target.value);
    console.log("Status Handler:");
  }



  return (
    <div className="container text-center">
      <div className="row" style={{ backgroundColor: "#003b00", borderRadius: "15px", color: "white", padding: "30px", width: "75%", margin: "auto" }}>
      <h2 style={{ fontFamily: "monospace" }}>Filter Properties</h2>
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Location
          </label>
          <input
            id="exampleFormControlInput1"
            className="form-control"
            type="text"
            placeholder="Search by Location"
            value={locationFilter}
            onChange={handleLocationFilter}
            style={{ maxWidth: "100%" }}
          />
          <br />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number of Bedrooms
          </label>
          <select
            onChange={handleBedFilter}
            value={bedFilter}
            className="form-select"
            aria-label="Default"
          >
            <option value="">--Number of Bedrooms--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            id="exampleFormControlInput1"
            className="form-control"
            type="text"
            placeholder="Search by Price"
            value={priceFilter}
            onChange={handlePriceFilter}
            style={{ maxWidth: "100%" }}
          />
          <br />

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Has a garden?
          </label>
          <select
            onChange={handleGardenFilter}
            value={gardenFilter}
            className="form-select"
            aria-label="Default"
          >
            <option value="">Select an Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number of Bathrooms
          </label>
          <select
            onChange={handleBathFilter}
            value={bathFilter}
            className="form-select"
            aria-label="Default"
          >
            <option value="">--Number of Bathrooms--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <br />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Property Status
          </label>
          <select
            onChange={handleStatusFilter}
            value={propertyStatus}
            className="form-select"
            aria-label="Default"
          >
            <option value="">--Select a Property Status--</option>
            <option value="For Sale">For Sale</option>
            <option value="Sold">Sold</option>
            <option value="Withdrawn">Withdrawn</option>
          </select>
        </div>
      </div>

      <div className="row row-cols-4 g-4 mt-1">{propertyComponents}</div>
    </div>
  );
}

export default FilterProperties;