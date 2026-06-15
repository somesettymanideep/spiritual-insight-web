import { n as SiteLayout, t as PageHero } from "./SiteLayout-CBjK6OEi.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region src/routes/services.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
	title: "Service Not Found",
	subtitle: "The service you're looking for doesn't exist."
}), /* @__PURE__ */ jsx("section", {
	className: "py-20 container mx-auto px-6 md:px-10 lg:px-16 text-center",
	children: /* @__PURE__ */ jsxs(Link, {
		to: "/services",
		className: "inline-flex items-center gap-2 text-primary font-semibold",
		children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " Back to all services"]
	})
})] });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
