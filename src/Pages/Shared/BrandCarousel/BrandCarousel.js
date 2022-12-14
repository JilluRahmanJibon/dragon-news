import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assests/Brands/Brand1.png";
import Brand2 from "../../../assests/Brands/Brand2.png";
function BrandCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100 "
					style={{ height: "200px" }}
					src={Brand1}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 "
					style={{ height: "200px" }}
					src={Brand2}
					alt="Second slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default BrandCarousel;
