import "./Navbar.css"
import { useEffect, useState } from "react"
import { getImageUrl } from "../../utils"
import menuIcon from "../../assets/Navbar/menuIcon.svg"
import closeIcon from "../../assets/Navbar/closeIcone.svg"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header>
                <div className="title">
                    <h1><small className="first-letter">i</small>nua<span><br />collective society</span> </h1>
                </div>
                <ul class="navlist">
                    <li><a href="" className="active">Home</a></li>
                    <li><a href="">Programs</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Gallery</a></li>
                </ul>
                <img className="menuIcon" src={menuOpen ? menuIcon : closeIcon} alt="" onClick={() => setMenuOpen(!menuOpen)} />

            </header>
        </>
    )
}
export default Navbar
