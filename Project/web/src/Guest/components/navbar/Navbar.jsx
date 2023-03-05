import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" >HomCo</span>
        <div className="navItems">
          <Link to={"/"}><button className="navButton">Home</button></Link> 
          <Link to={"/WorkerRegistration"}><button className="navButton">Worker</button></Link> 
          <Link to={"/UserRegistration"}><button className="navButton">User</button></Link> 
          <Link to={"/Login"}><button className="navButton">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar