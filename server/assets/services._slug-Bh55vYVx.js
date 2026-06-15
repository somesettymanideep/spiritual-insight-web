import { t as SERVICES } from "./site-DHTALTzq.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/services.$slug.tsx
var $$splitComponentImporter = () => import("./services._slug-YJtx1NpB.js");
var $$splitErrorComponentImporter = () => import("./services._slug-De0l51Nc.js");
var $$splitNotFoundComponentImporter = () => import("./services._slug-CMcN0FdA.js");
var Route = createFileRoute("/services/$slug")({
	head: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		const title = service ? `${service.title} — Sri Durga Matha Astrology` : "Service — Sri Durga Matha Astrology";
		const desc = service?.desc ?? "Authentic astrology service from Sri Durga Matha Astrology.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: service?.title ?? "Astrology Service"
			},
			{
				property: "og:description",
				content: desc
			},
			...service?.image ? [{
				property: "og:image",
				content: service.image
			}] : []
		] };
	},
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
