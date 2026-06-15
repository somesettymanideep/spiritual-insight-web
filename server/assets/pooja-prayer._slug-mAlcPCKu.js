import { n as SiteLayout, t as PageHero } from "./SiteLayout-CBjK6OEi.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region src/routes/pooja-prayer.$slug.tsx?tsr-split=notFoundComponent
function PoojaNotFound() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: "Pooja Service Not Found",
		subtitle: "The service you requested is unavailable."
	}), /* @__PURE__ */ jsx("section", {
		className: "py-20 text-center",
		children: /* @__PURE__ */ jsxs(Link, {
			to: "/pooja-prayer",
			className: "inline-flex items-center gap-2 font-semibold text-primary",
			children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " Back to all Pooja services"]
		})
	})] });
}
//#endregion
export { PoojaNotFound as notFoundComponent };
