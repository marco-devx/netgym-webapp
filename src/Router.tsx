import { Home, PlayerDetail } from "@pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/players/:name",
		Component: PlayerDetail,
	},
]);
