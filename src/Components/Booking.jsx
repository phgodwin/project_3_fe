import PropTypes from 'prop-types';
import axios from 'axios'
// booking axios delete
function Booking(props) {


    return (
        
        <tr>
            <td>{props.buyerName}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td><button style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }} type="button" onClick={() => {
                        axios.delete("/bookings/delete/" + props.id)
                            .then(res => { props.getBookings() })
                            
                            .catch(err => console.error(err));
                    }}>DELETE</button></td>
        </tr>
    );
}

Booking.propTypes = {
    time: PropTypes.string,
    date: PropTypes.string,
    buyerName: PropTypes.string,
    id: PropTypes.number,
}

export default Booking;