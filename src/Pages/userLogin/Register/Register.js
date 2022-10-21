import React, { useContext, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContexet";
const Register = () => {
	const [open, setOpen] = useState(true);
	const {
		signInGoogle,
		userCreateEmailAndPass,
		setUserName,
		updateUserProfile,
	} = useContext(AuthContext);
	const handleSignInGoogle = () => {
		signInGoogle();
	};
	const handleUserCreateEmailAndPass = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		userCreateEmailAndPass(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				updateUserProfile();
				setUserName(name);
			})
			.catch(error => {
				console.error("error: ", error);
			});
	};
	return (
		<div className="my-5 mx-3">
			<Form onSubmit={handleUserCreateEmailAndPass}>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name </Form.Label>
					<Form.Control
						name="name"
						required
						type="text"
						placeholder="Enter name"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email </Form.Label>
					<Form.Control
						name="email"
						required
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
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						onClick={() => setOpen(!open)}
						type="checkbox"
						label="Check me out"
					/>
				</Form.Group>

				<div className="text-center">
					<Button disabled={open} variant="primary" type="submit">
						Register
					</Button>
				</div>
			</Form>
			<div className="text-center pt-2">
				Already have an Account? Please <Link to="/login">Login </Link>
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

export default Register;
