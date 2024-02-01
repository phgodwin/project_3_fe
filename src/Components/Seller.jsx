import PropTypes from 'prop-types';
// seller's details as props - these can be passed to child components
function Seller(props) {

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

Seller.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    postCode: PropTypes.string,
    phoneNum: PropTypes.string,
    emailAdd: PropTypes.string,
}

export default Seller;