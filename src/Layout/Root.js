import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Root = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<Row>
					<Col lg="2" className="d-none d-lg-block">
						{" "}
						<LeftSideNav />
					</Col>
					<Col lg="7">
						<Outlet />
					</Col>
					<Col lg="3">
						<RightSideNav />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Root;
