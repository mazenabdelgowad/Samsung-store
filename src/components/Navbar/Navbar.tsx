import { NavLink } from "react-router-dom"
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6"
const Navbar = () => {

	const cartCount = 2;

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<span className="first-title">Samsung</span>
					<span className="second-title"> Store</span>
				</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/cart">
								<FaCartShopping /> - {cartCount}
							</NavLink>
						</li>
					</ul>
				</div>


			</div>
		</nav>
	)
}

export default Navbar
