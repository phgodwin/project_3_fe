import axios from "axios";
import { useEffect, useState } from "react";

// axios get - DISPLAYlist of sellers - where- properties page- select seller of property- used in AddNewProperty
function SellerDropDown(props) {

    const [sellers, setSellers] = useState([])
    const sellerNameComponent = []
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

        sellerNameComponent.push(
            <option value={seller.id}>{seller.firstName + " " + seller.lastName}</option>)

    }
    return(

        <select className='form-select' required value={props.value} onChange={props.onChange} >
            <option value="">Select Seller of Property</option>
            {sellerNameComponent}
            
        </select>
    )
}


export default SellerDropDown;