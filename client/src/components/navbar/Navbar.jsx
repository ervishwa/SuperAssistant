import "./navbar.css";
import {Link} from "react-router-dom";
export function Navbar() {
  return (
    <>
    <div className="navbar">
        <h1><Link to="/" style={{textDecoration:"none" ,color:"black"}}> Custom Form builder</Link></h1>
        <div className="navbarbox">
        <h3><Link to="/question" style={{textDecoration:"none" ,color:"black"}}>wana Try Questions</Link></h3>
        <h5>welcome user</h5>
        </div>
        
    </div>
    </>
  )
}

