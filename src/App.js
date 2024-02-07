import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Routing/Home';
import Buyers from './Components/Routing/Buyers';
import Properties from './Components/Routing/Properties';
import Sellers from './Components/Routing/Sellers';
import EditProperties from './Components/Routing/EditProperties';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo.png';
import Bookings from './Components/Routing/Bookings';



function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid fixed-top " style={{ backgroundColor: "#003b00" }}>
        <Link to="/">
            <img src={Logo} alt='Logo Icon' className="navbar-brand" width="75px" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" style={{ color: "white" }} to='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" style={{ color: "white" }} to='/buyers'>Buyers</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" style={{ color: "white" }} to='/sellers'>Sellers</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" style={{ color: "white" }} to='/properties'>Properties</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/edit/:id' element={<EditProperties />} />
          <Route path='/bookings/:id' element={<Bookings />} />
        </Routes>
      </div>

    </Router>
  );
}


export default App;
