import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSightNav = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("http://localhost:2700/news_categories")
			.then(res => res.json())
			.then(result => setCategories(result));
	}, []);
	return (
		<div>
			<h3
				className=" my-3 
			">
				All Category
			</h3>
			{categories.map(category => (
				<div key={category.id}>
					<NavLink
						style={{ textDecoration: "none" }}
						className={({ isActive }) =>
							isActive ? "text-black" : "my-1 d-block"
						}
						to={`/category/${category.id}`}>
						{category.name}
					</NavLink>
				</div>
			))}
		</div>
	);
};

export default LeftSightNav;
