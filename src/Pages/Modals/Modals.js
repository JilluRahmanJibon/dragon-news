import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/UserContexet";
import { ButtonGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Modals = props => {
	const {
		logInWithEmailAndPass,
		userCreateEmailAndPass,
		updateUserProfile,
		signInGoogle,
		userEmailVarify,
	} = useContext(AuthContext);
	const [user, setUser] = useState(true);
	const [open, setOpen] = useState(true);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		logInWithEmailAndPass(email, password)
			.then(result => {
				form.reset();
				setError("");
				const user = result.user;
				if (user.emailVerified) {
					navigate("/");
				} else {
					toast.error("please check your email and varify now !!!", {
						position: "top-center",
						duration: 10000,
					});
				}
			})
			.catch(error => {
				console.error("Error: ", error);
				setError(error.message);
			});
	};
	const emailVarification = () => {
		userEmailVarify()
			.then(() => {
				setError("");
			})
			.catch(e => {
				console.error(e);
				setError(error.message);
			});
	};
	const handleRegister = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		userCreateEmailAndPass(email, password)
			.then(result => {
				const user = result.user;
				form.reset();
				updateUserProfile(name, photoURL);
				setError("");
				navigate("/");
				emailVarification();
				toast.success("please check your email and varify now !!!", {
					position: "top-center",
					duration: 10000,
				});
			})
			.catch(error => {
				console.error("error: ", error);
				setError(error.message);
			});
	};
	const handleSignInGoogle = () => {
		signInGoogle();
	};

	return (
		<div>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Form.Text className="text-danger text-center fw-bold">
					{error}
				</Form.Text>
				<Modal.Header closeButton>
					{user ? (
						<Modal.Title id="contained-modal-title-vcenter">
							Login Here
						</Modal.Title>
					) : (
						<Modal.Title id="contained-modal-title-vcenter">
							Register Here
						</Modal.Title>
					)}
				</Modal.Header>
				<Modal.Body>
					{user ? (
						<Form onSubmit={handleLogin}>
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

							<div className="text-center">
								<Button variant="primary" type="submit">
									Login
								</Button>
							</div>
						</Form>
					) : (
						<Form onSubmit={handleRegister}>
							<Form.Group className="mb-3" controlId="formBasicText">
								<Form.Label>Name </Form.Label>
								<Form.Control
									name="name"
									required
									type="text"
									placeholder="Enter name"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicText">
								<Form.Label>Photo URL </Form.Label>
								<Form.Control
									name="photoUrl"
									required
									type="text"
									placeholder="Photo URL"
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
									label="Accept our Tearm & Conditions"
								/>
							</Form.Group>

							<div className="text-center">
								<Button disabled={open} variant="primary" type="submit">
									Register
								</Button>
							</div>
						</Form>
					)}
					{user ? (
						<div className="text-center pt-2">
							Don't have an Account? Please{" "}
							<Link onClick={() => setUser(!user)}>Sign up </Link>
						</div>
					) : (
						<div className="text-center pt-2">
							Don't have an Account? Please{" "}
							<Link onClick={() => setUser(!user)}>Log in </Link>
						</div>
					)}
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
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Modals;
