import PropTypes from 'prop-types';
import axios from 'axios';
import Buyers from './Routing/Buyers';
// BUYER PROPS

function Buyer(props) {
   
    return (

        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.postCode}</td>
            <td>{props.phoneNum}</td>
            <td>{props.emailAdd}</td>
            <td><button style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }} type="button" onClick={() => {
                axios.delete("/buyers/delete/" + props.id)
                .then(res => {props.getBuyers()})
                .catch(err => console.error(err));
             }}> DELETE BUYER </button>
             </td>

             {/* to be fix */}
             <td><button style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }} type="button" onClick={() => {
                axios.patch("/buyers/update/" + props.id)
                .then(res => {props.getBuyers()})
                .catch(err => console.error(err));
             }}> EDIT BUYER </button>
             </td>
                </tr>
                

    );
}


Buyer.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    postCode: PropTypes.string,
    phoneNum: PropTypes.string,
    emailAdd: PropTypes.string,
    id: PropTypes.number,
}

export default Buyer;

