import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContexet";
const Login = () => {
	const { signInGoogle, logInWithEmailAndPass } = useContext(AuthContext);
	const handleSignInGoogle = () => {
		signInGoogle();
	};
	const handleLogin = e => {
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		logInWithEmailAndPass(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => {
				console.error("Error: ", error);
			});
	};
	return (
		<div className="my-5 mx-3">
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email </Form.Label>
					<Form.Control
						required
						name="email"
						type="email"
						placeholder="Enter email"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						required
						type="password"
						placeholder="Password"
					/>
				</Form.Group>

				<div className="text-center">
					<Button variant="primary" type="submit">
						Login
					</Button>
				</div>
			</Form>
			<div className="text-center pt-2">
				Don't have an Account? Please <Link to="/register">Sign up </Link>
			</div>
			<div className="text-center mt-4">
				<ButtonGroup vertical>
					<Button
						onClick={handleSignInGoogle}
						className="mb-2"
						variant="outline-primary">
						<FcGoogle />
						Continue With Google
					</Button>{" "}
					<Button variant="outline-dark">
						<FaGithub />
						Continue With Github
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default Login;
