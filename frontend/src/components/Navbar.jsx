import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar =() =>{
    return <>
    <header>
        <div className="container">
            <div className="logo">
                <a href="/">Home Page</a>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pnr">PNR</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
}