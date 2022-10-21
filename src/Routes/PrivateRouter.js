import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContexet";

const PrivateRouter = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <h4>Loding...</h4>;
	}
	if (user && user.uid) {
		return children;
	}
	return <Link to="/login" />;
};

export default PrivateRouter;
