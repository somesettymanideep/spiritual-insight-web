import { n as SITE } from "./site-DHTALTzq.js";
import { t as POOJA_SERVICES } from "./pooja-services-DY20wbbm.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-CbAAsNZe.js";
import { t as Button } from "./button-BpE9Czok.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
//#region src/routes/pooja-prayer.index.tsx?tsr-split=component
function PoojaPrayerPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "Pooja & Prayer Services",
			subtitle: "Sacred Hindu rituals and prayers performed with devotion for peace, prosperity, and protection."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto text-center mb-16",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4",
						children: ["Sacred Services We ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Offer"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-lg max-w-2xl mx-auto",
						children: "Each pooja is performed with authentic Vedic traditions by experienced priests to bring divine blessings into your life."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
					children: POOJA_SERVICES.map((service, i) => {
						return /* @__PURE__ */ jsxs("article", {
							className: "group relative overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-elegant hover:border-primary/40 transition-all duration-500",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[4/3] overflow-hidden",
								children: /* @__PURE__ */ jsx("img", {
									src: service.image,
									alt: `${service.title} prayer service`,
									loading: "lazy",
									width: 768,
									height: 960,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-8",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-4 mb-4",
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
											children: String(i + 1).padStart(2, "0")
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-semibold mb-5 group-hover:text-primary transition-colors",
										children: service.title
									}),
									/* @__PURE__ */ jsx(Button, {
										asChild: true,
										className: "rounded-full",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/pooja-prayer/$slug",
											params: { slug: service.slug },
											children: ["Read More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
										})
									})
								]
							})]
						}, service.title);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-gradient-cosmos text-cosmos-foreground relative overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl md:text-4xl font-bold mb-4",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "Book Your Pooja Today"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/80 text-lg mb-8",
							children: "Contact us to schedule your sacred ceremony. We perform poojas both in-person and remotely for devotees across the world."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row items-center justify-center gap-4",
							children: [/* @__PURE__ */ jsxs("a", {
								href: SITE.phoneHref,
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 font-semibold transition-colors",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-gold" }),
									" ",
									SITE.phone
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: SITE.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold hover:scale-105 transition-transform",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }), " WhatsApp Us"]
							})]
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { PoojaPrayerPage as component };
