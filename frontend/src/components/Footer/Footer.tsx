import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<footer>
			<div className="container">
				<div className="footer_top">
					<div className="row align-items-center justify-content-between">

						<h1 className="col-lg-4 footer_top_social_links_logo">
							<NavLink to="/">Samsung Store</NavLink>
						</h1>

						<div className="col-lg-4 footer_top_social_links_icons
								d-flex align-items-center gap-4"
						>
							<NavLink to="/">
								<FaFacebookF />
							</NavLink>
							<NavLink to="/">
								<FaTwitter />
							</NavLink>
							<NavLink to="/">
								<FaLinkedinIn />
							</NavLink>
							<NavLink to="/">
								<BiLogoInstagramAlt />
							</NavLink>
							<NavLink to="/">
								<FaYoutube />
							</NavLink>
						</div>

						<ul className="col-lg-4 footer_top_social_links_useful_links
								d-flex gap-3
							">
							<li>
								<NavLink to="/">home</NavLink>
							</li>
							<li>
								<NavLink to="/">about</NavLink>
							</li>
							<li>
								<NavLink to="/">contact</NavLink>
							</li>
							<li>
								<NavLink to="/">products</NavLink>
							</li>
						</ul>
					</div>

					<div className="row mt-5">
						<div className="footer_top_call_us col-lg-4">
							<h6>call us</h6>
							<h3 className="mt-2">+62 864 6444 2222</h3>
						</div>
						<div className="footer_top_email_us col-lg-4">
							<h6>email us</h6>
							<h3 className="mt-2">Hi@babyshop.com</h3>
						</div>
						<div className="footer_top_main_shop col-lg-4">
							<h6>main shop</h6>
							<h3 className="mt-2">Jl.02 ke-Kota Malang, Cakep</h3>
						</div>
					</div>
				</div>
				<div className="footer_bottom mt-5">
					<p className="copyright">
						Copyrigt &copy; {date} Samsung Store | Developed by Mazen Abdelgowad
					</p>
					<p>
						Terms of Use | Privacy Policy
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
