import { n as SiteLayout, t as PageHero } from "./SiteLayout-CbAAsNZe.js";
import { t as Button } from "./button-BpE9Czok.js";
import { useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/pooja-prayer.$slug.tsx?tsr-split=errorComponent
function PoojaError({ reset }) {
	const router = useRouter();
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: "Something Went Wrong",
		subtitle: "We could not load this Pooja service."
	}), /* @__PURE__ */ jsx("section", {
		className: "py-20 text-center",
		children: /* @__PURE__ */ jsx(Button, {
			onClick: () => {
				router.invalidate();
				reset();
			},
			children: "Try Again"
		})
	})] });
}
//#endregion
export { PoojaError as errorComponent };
