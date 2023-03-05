import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">HomeCo</span>
        <div className="navItems">
          <Link to={"/Worker"}><button className="navButton">Home</button></Link> 
          <Link to={"/Worker/Request"}><button className="navButton">Request</button></Link> 
          <Link to={"../../Login"}><button className="navButton">Logout</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar