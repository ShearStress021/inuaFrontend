import { useState } from "react"
import closeIcon from "../../assets/Navbar/closeIcone.svg"
import menuIcon from "../../assets/Navbar/menuIcon.svg"
import "./Navbar.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header>
                <a className="title">
                    <h1><small className="first-letter">i</small>nua<span><br />collective society</span> </h1>
                </a>

                <ul className={`navlist ${menuOpen ? 'menuOpen' : ""}`}>
                    <li><a href="" className="active">Home</a></li>
                    <li><a href="">Programs</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Gallery</a></li>
                </ul>
                <img className="menuIcon" src={menuOpen ? closeIcon : menuIcon} alt="" onClick={() => setMenuOpen(!menuOpen)} />


            </header>
        </>
    )
}
export default Navbar
