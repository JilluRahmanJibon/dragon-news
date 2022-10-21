import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
	FaRegBookmark,
	FaEye,
	FaShareAlt,
	FaStar,
	FaArrowLeft,
} from "react-icons/fa";

const News = () => {
	const news = useLoaderData();
	const { image_url, title, total_view, category_id, details, author, rating } =
		news;

	return (
		<div className="my-3">
			<Card>
				<Card.Img variant="top" src={image_url} />
				<Card.Header className="d-flex justify-content-between align-items	-center">
					<div className="d-flex align-items-center gap-2">
						<div>
							<img
								style={{ width: "45px", height: "45px", borderRadius: "50%" }}
								src={author.img}
								alt=""
							/>
						</div>
						<div>
							<h6 className="m-0">
								{author.name ? (
									author.name
								) : (
									<span className="text-danger">Name not found</span>
								)}
							</h6>
							<p className="m-0">
								<small>
									{author.published_date ? (
										author.published_date
									) : (
										<span className="text-danger">date not found</span>
									)}{" "}
								</small>
							</p>
						</div>
					</div>
					<div className="d-flex gap-2 align-items-center">
						<FaRegBookmark />
						<FaShareAlt />
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title className="text-center py-1">{title}</Card.Title>

					<Card.Text>{details}</Card.Text>
					<div>
						<Link
							style={{ textDecoration: "none" }}
							to={`/category/${category_id}`}>
							Read all news in this category... <FaArrowLeft />
						</Link>
					</div>
				</Card.Body>
				<Card.Footer className="d-flex gap-1 justify-content-between align-items-center">
					<div className="d-flex gap-1 align-items-center">
						<FaStar className="text-warning" /> <span>{rating.number}</span>
					</div>
					<div className="d-flex gap-1 align-items-center">
						<FaEye />
						<span>{total_view}</span>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default News;
