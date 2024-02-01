import PropTypes from 'prop-types';
// BUYER PROPS
function Buyer(props) {
   
    return (

        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.postCode}</td>
            <td>{props.phoneNum}</td>
            <td>{props.emailAdd}</td>
        </tr>
    );
}


Buyer.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    postCode: PropTypes.string,
    phoneNum: PropTypes.string,
    emailAdd: PropTypes.string,
}

export default Buyer;