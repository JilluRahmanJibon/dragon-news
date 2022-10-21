import React from "react";
import Card from "react-bootstrap/Card";
import {
	FaArrowRight,
	FaEye,
	FaRegBookmark,
	FaShareAlt,
	FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
	const { image_url, title, total_view, details, _id, author, rating } = news;
	return (
		<div>
			<Card className="p-2 m-4">
				<Card.Header className="d-flex justify-content-between align-items-center">
					<div title="Author" className="d-flex align-items-center gap-2">
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
									<span className="text-danger"> Name not found</span>
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
						<FaRegBookmark style={{ cursor: "pointer" }} title="Bookmark" />
						<FaShareAlt style={{ cursor: "pointer" }} title="Share" />
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Img variant="top" src={image_url} />
					<Card.Text>
						{details.length > 250 ? (
							<>
								{details.slice(0, 250)}...
								<Link
									style={{ textDecoration: "none", color: "red" }}
									to={`/news/${_id}`}>
									Read more <FaArrowRight />
								</Link>
							</>
						) : (
							<>{details}</>
						)}
					</Card.Text>
				</Card.Body>
				<Card.Footer className="d-flex gap-1 justify-content-between align-items-center">
					<div title="ratings" className="d-flex gap-1 align-items-center">
						<FaStar className="text-warning" /> <span>{rating.number}</span>
					</div>
					<div title="views" className="d-flex gap-1 align-items-center">
						<FaEye />
						<span>{total_view}</span>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default NewsSummaryCard;
