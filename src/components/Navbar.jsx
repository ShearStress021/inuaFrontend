
import { useState } from "react"
import { Link } from "react-router-dom"
import closeIcon from "../assets/Navbar/closeIcone.svg"
import menuIcon from "../assets/Navbar/menuIcon.svg"
import "./Navbar.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
       <header>
                <Link to='/' className="title">
                    <h1><small className="first-letter">i</small>nua<span><br />collective society</span> </h1>
                </Link>

                <ul className={`navlist ${menuOpen ? 'menuOpen' : ""}`}>
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                    <li><Link to="/about_us">About Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
                <img className="menuIcon" src={menuOpen ? closeIcon : menuIcon} alt="" onClick={() => setMenuOpen(!menuOpen)} />


            </header>
        </>
    )
}
export default Navbar