import "./navbar.css"
import "../../components/Footer/Footer.css"
const Navbar = () => {
    return (
        <>
            <div className="main-container">

                <p className="site-title">Harsh Furnitures</p>

                <div className="container">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Products</li>
                </div>
            </div>
        </>
    )
}

export default Navbar
