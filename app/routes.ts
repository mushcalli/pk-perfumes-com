import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("./pages/home.tsx"),
	route("/asia-collection", "./pages/asiacollection.tsx"),
	route("/prive-collection", "./pages/privecollection.tsx"),
	route("/signature-collection", "./pages/signaturecollection.tsx"),
] satisfies RouteConfig;
