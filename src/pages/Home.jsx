import { Link } from "react-router-dom"
import program from "../assets/Home/1.jpg"
import hero from "../assets/Home/hero.jpg"
import Navbar from "../components/Navbar"
import "./Home.css"
const Home = () => {
    return (
        <>
            <Navbar />
            <section className="hero">
                <div className="hero-text">
                    <h2>INUA COLLECTIVE SOCIETY</h2>
                    <p>is a non-profit organization with
                        operations in the BC Lower mainland. INUA is a Swahili word which
                        translates to elevate or uplift. INUA Collective society strives to
                        elevate and up-skill the welfare of BIPOC and other racialized
                        communities in BC lower mainland.</p>
                    <Link to="/about_us" className="hero-btn" href="#">Learn More</Link>
                </div>
                <div className="hero-img">
                    <img src={hero} alt="hero" />
                </div>

            </section>
            <section className="program">
                <h4>Our Programs</h4>
                <div className="main-program">

                    <div className="program-img">

                        <img className="prog2" src={program} />
                    </div>
                    <div className="program-text">

                        <h2>Youth mentership and School Tours</h2>
                        <p>The Youth Mentorship Program is a great way for young people to
                            get involved in the community and learn from more experienced
                            people. It can help them develop skills and relationships that will
                            be valuable in their lives. By working together, young people can
                            create an impact and have a positive impact on the world.
                            Developing and sharing ideas with other youth members of the
                            community can help them to learn and grow</p>
                        <Link to="/programs" className="program-btn">More Programs</Link>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Home