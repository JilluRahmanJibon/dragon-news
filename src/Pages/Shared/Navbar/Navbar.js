import { useContext, useState } from "react";
import { Button, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContexet";
import Modals from "../../Modals/Modals";

import LeftSightNav from "../LeftSideNav/LeftSideNav";

function NavBar() {
	const { user, userSignOut } = useContext(AuthContext);
	const [open, setOpen] = useState(false);
	const [userInfoOpen, setUserInfoOpen] = useState(false);
	const [modalShow, setModalShow] = useState(true);
	const signOut = () => {
		userSignOut();
	};

	return (
		<>
			{user?.uid ? undefined : (
				<Modals show={modalShow} onHide={() => setModalShow(false)} />
			)}
			<Navbar bg="light" expand="lg">
				<Container className="position-relative">
					{open ? (
						<div
							onClick={() => setUserInfoOpen(!userInfoOpen)}
							className="   position-absolute bg-info p-2 "
							style={{
								top: "50px",
								zIndex: "500",
								width: "250px",
								right: "30px",
								borderRadius: "10px 0px 5px 5px",
							}}>
							{user?.uid ? (
								<div>
									<Link to="/" className="d-block my-1 text-black ">
										Home
									</Link>
									<Link className="d-block my-1 text-black ">Account</Link>
									<Button onClick={signOut} variant="secondary">
										Sign Out
									</Button>
								</div>
							) : (
								<Link
									onClick={() => setModalShow(true)}
									className="d-block my-1 text-black ">
									Login
								</Link>
							)}
						</div>
					) : undefined}
					<Navbar.Brand>
						<Link className="text-decoration-none " to="/">
							Dragon news
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							<NavDropdown title="Link" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#" disabled>
								Link
							</Nav.Link>
							<div className="d-lg-none">
								<LeftSightNav />
							</div>
						</Nav>
						<NavLink title="Profile" onClick={() => setOpen(!open)}>
							{user?.photoURL ? (
								<img
									style={{
										width: "50px",
										border: "2px solid red",
										height: "50px",
										borderRadius: "50%",
									}}
									src={user?.photoURL}
									alt=""
								/>
							) : (
								<FaUserAlt style={{ height: "25px", width: "25px" }} />
							)}
						</NavLink>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
