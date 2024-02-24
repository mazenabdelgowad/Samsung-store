import Product from "../../components/Product/Product";
import './Products.css'
const Products = () => {


	return (
		<section className="products">
			<h2 className="text-center fw-bold my-3">PRODUCTS</h2>
			<div className="container">
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</section>
	)
}

export default Products
