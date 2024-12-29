import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
    return (

        <footer>
            <section className="footerSection">
                <div className="col">
                    <Link to='/' className="title">
                        <h1><small className="first-letter">i</small>nua<span><br />collective society</span> </h1>
                    </Link>
                    <p>
                        is a non-profit organization with
                        operations in the BC Lower mainland. INUA is a Swahili word which
                        translates to elevate or uplift.
                    </p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline"><span></span></div></h3>
                    <p>9343 149 street</p>
                    <p>Surrey, BC</p>
                    <p className="email-id">inuacollective@gmail.com</p>
                    <p>+ 1 604-616-5717</p>
                </div>
                <div className="col">
                    <h3>Quick Links<div className="underline"><span></span></div></h3>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Events</Link></li>
                        <li><Link>Gallery</Link></li>
                        <li><Link>Blog</Link></li>

                    </ul>

                </div>
                <div className="col">
                    <h3>News Letter <div className="underline"><span></span></div></h3>
                    <form action="">
                        <i class='bx bxs-envelope' ></i>
                        <input type="email" placeholder="Enter your Email" required />
                        <button type="submit"><i class='bx bxs-right-arrow-alt'></i></button>
                    </form>
                    <div className="socials">
                        <i class='bx bxl-facebook' ></i>
                        <i class='bx bxl-linkedin' ></i>
                        <i class='bx bxl-instagram' ></i>
                        <i class='bx bxl-youtube' ></i>

                    </div>

                </div>
            </section>
            <hr />

            <p className="copyright">inua collective society &copy; All right Reserved</p>


        </footer>

    )
}
export default Footer