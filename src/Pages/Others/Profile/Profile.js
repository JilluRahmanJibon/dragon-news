import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContexet";

const Profile = () => {
	const { user, updateUserProfile } = useContext(AuthContext);
	const [name, setName] = useState(user?.displayName);

	const [tearm, setTearm] = useState(true);
	const photoUrlRef = useRef(user?.photoURL);
	const handlUpdateSubmit = e => {
		e.preventDefault();
		const url = photoUrlRef.current.value;
		updateUserProfile(name, url);
		toast.success("update profile success.", {
			position: "top-center",
			duration: 3000,
		});
	};
	return (
		<div>
			<Form onSubmit={handlUpdateSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						defaultValue={user?.email}
						readOnly
						type="email"
						placeholder="Enter email"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Your Name </Form.Label>
					<Form.Control
						onChange={e => setName(e.target.value)}
						defaultValue={name}
						type="text"
						placeholder="Your name"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Photo URL </Form.Label>
					<Form.Control
						defaultValue={user.photoURL}
						ref={photoUrlRef}
						type="text"
						placeholder="Photo URL"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						onClick={() => setTearm(!tearm)}
						type="checkbox"
						label={
							<>
								accept <Link>tearm condition</Link>
							</>
						}
					/>
				</Form.Group>
				<Button disabled={tearm} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Profile;
