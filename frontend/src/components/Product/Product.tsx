import { Link } from "react-router-dom";
import product from "../../assets/hero.jpg";
const Product = () => {
	return (
		<div className="product-card">
			<img src={product} className="card-img-top" alt="product" />
			<div className="card-body">
				<h5 className="card-title mt-2">Product name</h5>
				<p className="card-text mt-2">Some description about.</p>
				<div className="cart d-flex justify-content-between align-items-baseline mt-2">
					<Link to="/" className="btn btn-dark">
						More Details
					</Link>
					<button className="btn btn-dark">Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
