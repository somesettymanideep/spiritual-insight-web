import { n as SITE, t as SERVICES } from "./site-DHTALTzq.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUp, Mail, MapPin, Menu, Phone, X } from "lucide-react";
var logo_png_asset_default = {
	asset_id: "527e11a9-c82e-4370-a22f-15b05043ea89",
	content_type: "image/png",
	created_at: "2026-06-13T06:18:55Z",
	original_filename: "logo.png",
	project_id: "5a02772a-c488-4975-b6de-e98c7af3aba5",
	r2_key: "a/v1/5a02772a-c488-4975-b6de-e98c7af3aba5/527e11a9-c82e-4370-a22f-15b05043ea89/logo.png",
	size: 103863,
	url: "/__l5e/assets-v1/527e11a9-c82e-4370-a22f-15b05043ea89/logo.png",
	version: 1
};
//#endregion
//#region src/components/Header.tsx
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/pooja-prayer",
		label: "Pooja & Prayer Services"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#FEFEFE] ${scrolled ? "shadow-card py-2" : "shadow-sm py-3"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					children: /* @__PURE__ */ jsx("img", {
						src: logo_png_asset_default.url,
						alt: SITE.name,
						className: "h-12 md:h-14 w-auto"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full",
						activeProps: { className: "text-primary" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:flex items-center gap-3",
					children: /* @__PURE__ */ jsxs("a", {
						href: SITE.phoneHref,
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-105 transition-transform",
						children: [
							/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
							" ",
							SITE.phone
						]
					})
				}),
				/* @__PURE__ */ jsx("button", {
					className: "lg:hidden p-2 rounded-md text-foreground",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ jsxs("div", {
			className: "lg:hidden glass-light border-t border-border mt-2 px-4 py-4 space-y-2 animate-fade-up",
			children: [nav.map((n) => /* @__PURE__ */ jsx(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				className: "block py-2 text-foreground hover:text-primary font-medium",
				children: n.label
			}, n.to)), /* @__PURE__ */ jsxs("a", {
				href: SITE.phoneHref,
				className: "mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
				children: [
					/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
					" ",
					SITE.phone
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/StarField.tsx
function StarField({ density = 40 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: density }, (_, i) => ({
			id: i,
			top: Math.random() * 100,
			left: Math.random() * 100,
			size: Math.random() * 2 + 1,
			delay: Math.random() * 3,
			duration: 2 + Math.random() * 3
		})).map((s) => /* @__PURE__ */ jsx("span", {
			className: "absolute rounded-full bg-white animate-twinkle",
			style: {
				top: `${s.top}%`,
				left: `${s.left}%`,
				width: s.size,
				height: s.size,
				animationDelay: `${s.delay}s`,
				animationDuration: `${s.duration}s`,
				boxShadow: "0 0 4px rgba(255,255,255,0.8)"
			}
		}, s.id))
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative bg-cosmos text-cosmos-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(StarField, { density: 60 }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative container mx-auto px-6 md:px-10 lg:px-16 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("img", {
						src: logo_png_asset_default.url,
						alt: SITE.name,
						className: "h-14 bg-white/95 rounded-lg p-1 mb-4"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-white/70 leading-relaxed",
						children: "Trusted astrology and spiritual guidance for love, marriage, career and protection from negative energies."
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display text-lg mb-4 text-gradient-gold",
						children: "Quick Links"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2 text-sm text-white/80",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "hover:text-gold",
								children: "Home"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/about",
								className: "hover:text-gold",
								children: "About"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/services",
								className: "hover:text-gold",
								children: "Services"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "hover:text-gold",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display text-lg mb-4 text-gradient-gold",
						children: "Top Services"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm text-white/80",
						children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "hover:text-gold",
							children: s.title
						}) }, s.slug))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display text-lg mb-4 text-gradient-gold",
						children: "Contact"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-3 text-sm text-white/80",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5 text-gold" }),
									" ",
									SITE.address
								]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0 mt-0.5 text-gold" }),
									" ",
									/* @__PURE__ */ jsx("a", {
										href: `mailto:${SITE.email}`,
										className: "hover:text-gold break-all",
										children: SITE.email
									})
								]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0 mt-0.5 text-gold" }),
									" ",
									/* @__PURE__ */ jsx("a", {
										href: SITE.phoneHref,
										className: "hover:text-gold",
										children: SITE.phone
									})
								]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative border-t border-white/10 py-5 text-center text-sm text-white/60",
				children: [
					"© 2026 ",
					SITE.name,
					". All Rights Reserved."
				]
			})
		]
	});
}
//#endregion
//#region src/components/FloatingActions.tsx
function WhatsAppIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function FloatingActions() {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollTop = () => window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end",
		children: [
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: scrollTop,
				"aria-label": "Scroll to top",
				className: `relative h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-all duration-500 ring-2 ring-primary/40 ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "absolute inset-0 rounded-full animate-glow-pulse",
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsx(ArrowUp, { className: "h-6 w-6 relative" }),
					/* @__PURE__ */ jsx("span", {
						className: "sr-only",
						children: "Back to top"
					})
				]
			}),
			/* @__PURE__ */ jsxs("a", {
				href: SITE.whatsapp,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "WhatsApp",
				className: "group flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition-transform pl-2 pr-5 py-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "h-12 w-12 rounded-full bg-white/20 flex items-center justify-center animate-glow-pulse",
					children: /* @__PURE__ */ jsx(WhatsAppIcon, { className: "h-7 w-7" })
				}), /* @__PURE__ */ jsx("span", {
					className: "font-bold text-base tracking-wide",
					children: "WhatsApp"
				})]
			}),
			/* @__PURE__ */ jsx("a", {
				href: SITE.phoneHref,
				"aria-label": "Call",
				className: "h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-transform",
				children: /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6" })
			})
		]
	});
}
//#endregion
//#region src/components/SiteLayout.tsx
function SiteLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingActions, {})
		]
	});
}
function PageHero({ title, subtitle, image }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative pt-32 pb-20 bg-cosmos text-cosmos-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: image ?? "/spiritual-insight-web/assets/page-banner-bg-O7oS_IgW.jpg",
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-cosmos/80 via-cosmos/60 to-cosmos/85" }),
			/* @__PURE__ */ jsx(StarField, { density: 40 }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative container mx-auto px-6 md:px-10 lg:px-16 text-center",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-6xl font-bold mb-4 animate-fade-up",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-gradient-gold",
						children: title
					})
				}), subtitle && /* @__PURE__ */ jsx("p", {
					className: "max-w-2xl mx-auto text-white/80 text-lg animate-fade-up",
					style: { animationDelay: "0.1s" },
					children: subtitle
				})]
			})
		]
	});
}
//#endregion
export { SiteLayout as n, StarField as r, PageHero as t };
