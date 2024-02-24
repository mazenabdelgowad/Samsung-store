import { NavLink } from "react-router-dom";
import './Sign.css'


const SignUp = () => {
	return (
		<div className="sign-page">

			<h1 className="mb-2 sign_logo">
				<NavLink to="/">Samsung Store</NavLink>
			</h1>
			<h4>Create new account</h4>
			<form action=""
				className="d-flex flex-column align-items-center gap-4 mt-4"
			>
				<input
					type="text"
					name="user-name"
					id="name"
					placeholder="Username"
					required
				/>
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
				<input
					type="password"
					name="confrim-user-password"
					id="confirm-password"
					placeholder="Confirm Password"
					required
				/>
				<button className="btn btn-dark">
					Sign Up
				</button>
			</form>
			<p className="mt-2">have an account? <NavLink to="/sign-in">Sign In</NavLink></p>
		</div>
	);
};

export default SignUp;
