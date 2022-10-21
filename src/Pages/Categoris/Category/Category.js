import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
	const allNews = useLoaderData();

	return (
		<div>
			{allNews.map(news => (
				<NewsSummaryCard key={news._id} news={news} />
			))}
		</div>
	);
};

export default Category;
