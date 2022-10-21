import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContexet";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
const PrivateRouter = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	console.log(user);
	if (loading) {
		return (
			<div className="text-center mt-5 ">
				<Button variant="primary" disabled>
					<Spinner
						as="span"
						animation="grow"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					Loading...
				</Button>
			</div>
		);
	}
	if (user && user.emailVerified && true) {
		return children;
	}
	return <Link to="/login" />;
};

export default PrivateRouter;
