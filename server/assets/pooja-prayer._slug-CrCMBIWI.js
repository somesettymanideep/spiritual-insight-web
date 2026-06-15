import { n as SITE } from "./site-DHTALTzq.js";
import { t as Route } from "./pooja-prayer._slug-B9HeMOpz.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-CbAAsNZe.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, MessageCircle, Phone } from "lucide-react";
//#region src/routes/pooja-prayer.$slug.tsx?tsr-split=component
function PoojaServiceDetailPage() {
	const { service } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: service.title,
		subtitle: service.desc,
		image: service.image
	}), /* @__PURE__ */ jsx("main", {
		className: "bg-background py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto grid max-w-6xl items-start gap-12 px-6 md:px-10 lg:grid-cols-2 lg:px-16",
			children: [/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-3xl shadow-elegant",
				children: /* @__PURE__ */ jsx("img", {
					src: service.image,
					alt: `${service.title} ceremony`,
					className: "aspect-[4/3] h-full w-full object-cover"
				})
			}), /* @__PURE__ */ jsxs("article", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
					children: "Sacred Pooja Service"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "mt-3 mb-5 font-display text-3xl font-bold text-foreground md:text-4xl",
					children: ["About ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient-primary",
						children: service.title
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mb-8 text-lg leading-relaxed text-muted-foreground",
					children: service.overview
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mb-4 font-display text-2xl font-semibold",
					children: "Benefits of This Service"
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mb-9 grid gap-3 sm:grid-cols-2",
					children: service.benefits.map((benefit) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ jsx("span", {
							className: "text-sm text-foreground",
							children: benefit
						})]
					}, benefit))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-gradient-primary p-7 text-primary-foreground shadow-elegant",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "mb-2 font-display text-2xl font-bold",
							children: "Book this Pooja"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mb-5 text-primary-foreground/85",
							children: "Contact us for scheduling, preparation guidance, and ceremony details."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: SITE.phoneHref,
								className: "inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 font-bold text-primary transition-transform hover:scale-105",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
									" ",
									SITE.phone
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: SITE.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground transition-transform hover:scale-105",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }), " WhatsApp"]
							})]
						})
					]
				})
			] })]
		})
	})] });
}
//#endregion
export { PoojaServiceDetailPage as component };
