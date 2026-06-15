import { n as SiteLayout, t as PageHero } from "./SiteLayout-CbAAsNZe.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/services.$slug.tsx?tsr-split=errorComponent
var SplitErrorComponent = ({ error, reset }) => /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
	title: "Something went wrong",
	subtitle: error.message
}), /* @__PURE__ */ jsx("section", {
	className: "py-20 container mx-auto px-6 md:px-10 lg:px-16 text-center",
	children: /* @__PURE__ */ jsx("button", {
		onClick: reset,
		className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold",
		children: "Try again"
	})
})] });
//#endregion
export { SplitErrorComponent as errorComponent };
