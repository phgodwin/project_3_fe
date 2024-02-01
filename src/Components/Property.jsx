import PropTypes from 'prop-types';  
import bathroomPicture from "../images/bathroom-svgrepo-com.svg";
import bedroomPicture from "../images/bed-svgrepo-com.svg";
import gardenPicture from "../images/garden-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom';
import sellerPicture from "../images/person-svgrepo-com.svg";

// us navigate?
function Property(props) {

    const handleEdit = () =>{
        navigate("/edit/" + props.id)

    }
    const handleBookings = () =>{
        navigate("/bookings/" + props.id)

    }
    const navigate = useNavigate();

    
    function buttonDisplay() {
    
    if(props.status !== "For Sale") {
        return (
          <>
            <button style={{marginLeft: "10px"}} className='btn btn-success' disabled="disabled">Bookings</button>
          </>
        )
      } else {
        return (
            <>
            <button style={{marginLeft: "10px"}} className='btn btn-success ' onClick={handleBookings}>Bookings</button>
            </>
        )
      }
    }

    return ( 
        <div className='col'>
            <div className='card'>
            <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='card-img-top' alt="house" />
                <div className='card-body'>
                    <h5 className='card-title'>Price: £{props.prc}</h5>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>{props.loc}: {props.pcod}</li>
                            <li className='list-group-item'> <img alt='bed' width="30px" src={bedroomPicture}/> {props.beds}</li>
                            <li className='list-group-item'> <img alt='bath' width="30px" src={bathroomPicture}/> {props.bath}</li>
                            <li className='list-group-item'> <img alt='garden' width="30px" src={gardenPicture}/> {props.grdn}</li>
                            <li className='list-group-item'> <img alt='garden' width="30px" src={sellerPicture}/> {props.sellnme}</li>
                        </ul>
                        <div class="card-body">
                        <h5>{props.status}</h5>     
                     </div>
                     <button className='btn btn-primary ' onClick={handleEdit}>Edit Property</button> 
                     {buttonDisplay()}
                    </div>
                </div>
            </div>
        </div>
     );
}

Property.propTypes = {
    id: PropTypes.number.isRequired,
    prc: PropTypes.string.isRequired,
    pcod: PropTypes.string.isRequired,
    beds: PropTypes.string.isRequired,
    bath: PropTypes.string.isRequired,
    grdn: PropTypes.string.isRequired,
    sellnme: PropTypes.string.isRequired
}

export default Property;