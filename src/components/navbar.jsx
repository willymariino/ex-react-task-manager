
import { NavLink } from "react-router-dom"

function Navbar() {
    return (

        <nav>
            <li> <NavLink to="/AddTasks" className="nav-link" >Lista task</NavLink> </li>
            <li> <NavLink to="/TaskList" className="nav-link">Aggiungi Task</NavLink> </li>
        </nav>


    )
}

export default Navbar
