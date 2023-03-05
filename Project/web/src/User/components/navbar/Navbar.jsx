import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">HomeCo</span>
        <div className="navItems">
          <Link to={"/User/"}><button className="navButton">Home</button></Link> 
          <Link to={"/User/Search"}><button className="navButton">Search</button></Link> 
          <Link to={"/User/Bookings"}><button className="navButton">Bookings</button></Link> 
          <Link to="../../Login"><button className="navButton">Logout</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar