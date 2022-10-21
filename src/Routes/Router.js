import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Category from "../Pages/Categoris/Category/Category";
import News from "../Pages/News/News/News";
import PrivateRouter from "./PrivateRouter";
import Login from "../Pages/userLogin/Login/Login";
import Register from "../Pages/userLogin/Register/Register";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				loader: async () => fetch("http://localhost:2700/news"),
				element: (
					<PrivateRouter>
						{" "}
						<Home />
					</PrivateRouter>
				),
			},

			{
				path: "/category/:id",
				loader: async ({ params }) => {
					return fetch(`http://localhost:2700/category/${params.id}`);
				},
				element: (
					<PrivateRouter>
						<Category />
					</PrivateRouter>
				),
			},
			{
				path: "/news/:id",
				loader: async ({ params }) =>
					fetch(`http://localhost:2700/news/${params.id}`),
				element: (
					<PrivateRouter>
						<News />
					</PrivateRouter>
				),
			},
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
		],
	},
]);
