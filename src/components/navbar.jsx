
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <li> <NavLink to="/AddTasks" className="nav-link" >Home Page</NavLink> </li>
            <li> <NavLink to="/TaskList" className="nav-link">About Us</NavLink> </li>
        </nav>


    )
}

export default Navbar
