import { t as POOJA_SERVICES } from "./pooja-services-DY20wbbm.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/pooja-prayer.$slug.tsx
var $$splitComponentImporter = () => import("./pooja-prayer._slug-CrCMBIWI.js");
var $$splitErrorComponentImporter = () => import("./pooja-prayer._slug-DUwJoi68.js");
var $$splitNotFoundComponentImporter = () => import("./pooja-prayer._slug-BEeoCeO6.js");
var Route = createFileRoute("/pooja-prayer/$slug")({
	head: ({ params }) => {
		const service = POOJA_SERVICES.find((item) => item.slug === params.slug);
		const title = service ? `${service.title} — Pooja & Prayer` : "Pooja Service";
		const description = service?.desc ?? "Authentic Hindu pooja and prayer service.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			...service ? [{
				property: "og:image",
				content: service.image
			}] : []
		] };
	},
	loader: ({ params }) => {
		const service = POOJA_SERVICES.find((item) => item.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
