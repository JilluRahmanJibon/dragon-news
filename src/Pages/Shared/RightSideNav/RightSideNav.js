import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import {
	FaDiscord,
	FaFacebook,
	FaGithub,
	FaTwitch,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ListGroup } from "react-bootstrap";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../UserContext/UserContexet";
const RightSightNav = () => {
	const { signInGoogle } = useContext(AuthContext);
	const signWithGoogle = () => {
	signInGoogle()
}
	return (
		<div className="my-3 pt-2">
			<ButtonGroup vertical>
				<Button
					onClick={() => signWithGoogle()}
					className="mb-2"
					variant="outline-primary">
					<FcGoogle /> Log in With Google
				</Button>{" "}
				<Button variant="outline-dark">
					<FaGithub />
					Log in With Github
				</Button>
			</ButtonGroup>
			<div className="pt-3">
				<h5>Find Us On</h5>
				<ListGroup vertical>
					<ListGroup.Item className="mb-2" variant="outline-primary">
						<FaFacebook /> Facebook
					</ListGroup.Item>{" "}
					<ListGroup.Item className="mb-2" variant="outline-primary">
						<FaYoutube /> Youtube
					</ListGroup.Item>{" "}
					<ListGroup.Item className="mb-2" variant="outline-primary">
						<FaTwitter /> Twitter
					</ListGroup.Item>{" "}
					<ListGroup.Item className="mb-2" variant="outline-primary">
						<FaWhatsapp /> WhatsApp
					</ListGroup.Item>{" "}
					<ListGroup.Item className="mb-2" variant="outline-primary">
						<FaDiscord /> Discord
					</ListGroup.Item>{" "}
					<ListGroup.Item className="mb-2" variant="outline-primary">
						<FaTwitch /> Privacy Policy
					</ListGroup.Item>{" "}
					<ListGroup.Item className="mb-2" variant="outline-primary">
						Tearm & Condition
					</ListGroup.Item>{" "}
				</ListGroup>
			</div>
			<div className="mt-3 bg-info">
				<BrandCarousel />
			</div>
		</div>
	);
};

export default RightSightNav;
