import { NavLink } from "react-router-dom";
import '../SignUp/Sign.css'
const Signin = () => {
	return (
		<div className="sign-page">
			<h1 className="mb-2 sign_logo">
				<NavLink to="/">Samsung Store</NavLink>
			</h1>
			<h4>Welcome back</h4>
			<form action=""
				className="d-flex flex-column align-items-center gap-4 mt-4"
			>
				<input
					type="email"
					name="user-email"
					id="email"
					required
					placeholder="email address"
				/>
				<input
					type="password"
					name="user-password"
					id="password"
					placeholder="Password"
					required
				/>
				<button className="btn btn-dark">
					Sign In
				</button>
			</form>
			<p className="mt-2">
				Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink>
			</p>
		</div>
	);
};

export default Signin;
