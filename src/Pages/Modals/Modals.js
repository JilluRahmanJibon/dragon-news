import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const Modals = props => {
	const [open, setOpen] = useState(true);
	return (
		<div>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Login Here
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email </Form.Label>
							<Form.Control required type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control required type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check
								onClick={() => setOpen(!open)}
								type="checkbox"
								label="Check me out"
							/>
						</Form.Group>
						<Button disabled={open} variant="primary" type="submit">
							Login
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Modals;
