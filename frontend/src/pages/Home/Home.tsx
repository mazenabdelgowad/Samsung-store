import Hero from "../../components/Hero/Hero"
import Contact from "../Contact/Contact"
import Products from "../Products/Products"
const Home = () => {
	return (
		<div className="home-page">
			<Hero />
			<Products />
			<Contact />
		</div>
	)
}

export default Home
