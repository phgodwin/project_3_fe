import PropTypes from 'prop-types';
import axios from 'axios';
// seller's details as props - these can be passed to child components
function Seller(props) {

    return (

        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.postCode}</td>
            <td>{props.phoneNum}</td>
            <td>{props.emailAdd}</td>
            <td><button style={{ color: "white", fontWeight: "bold", backgroundColor: "#984da2" }} type="button" onClick={() => {
                axios.delete("http://localhost:8081/sellers/delete/" + props.id)
                .then(res => {props.getSellers()})
                .catch(err => console.error(err));
             }}> DELETE SELLER </button>
             </td>
                  {/* to be fix */}
                  <td><button style={{ color: "white", fontWeight: "bold", backgroundColor: "#984da2" }} type="button" onClick={() => {
                axios.patch("http://localhost:8081/sellers/update/" + props.id)
                .then(res => {props.getSellers()})
                .catch(err => console.error(err));
             }}> EDIT SELLER </button>
             </td>
                </tr>
        
    );
}

Seller.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    postCode: PropTypes.string,
    phoneNum: PropTypes.string,
    emailAdd: PropTypes.string,
    id: PropTypes.number
}

export default Seller;