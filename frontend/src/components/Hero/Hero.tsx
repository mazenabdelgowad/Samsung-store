import "./Hero.css";
import heroImage from "../../assets/hero.jpg";
const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 hero-title d-flex flex-column align-items-start gap-2">
						<h5>SAMSUNG</h5>
						<h1 className="hero-title-main-title">
							Discover the latest mobile innovations.
						</h1>
						<p className="hero-title-description">
							Explore cutting-edge technology with our latest mobile devices and
							accessories.
						</p>
						<button className="hero-title-button">Shop Now!</button>
					</div>
					<div className="col-lg-6 d-flex flex-column align-items-start gap-2">
						<img
							src={heroImage}
							alt="samsung s42 ultra"
							className="img-fluid"
						/>
						<p className="hero_product_description">
							The Samsung S4 2Ultra is a cutting-edge smartphone boasting
							advanced features and a sleek design, offering users a premium
							mobile experience with its high-resolution display
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
