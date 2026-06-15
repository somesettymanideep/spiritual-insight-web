import { n as SITE, r as TESTIMONIALS } from "./site-DHTALTzq.js";
import { n as SiteLayout, r as StarField, t as PageHero } from "./SiteLayout-CBjK6OEi.js";
import { t as about_astrologer_default } from "./about-astrologer-DzdoGZ42.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { BadgeCheck, Check, Clock3, Eye, Headphones, Heart, Star, Target, Users } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "About Sri Durga Matha Astrology",
			subtitle: "A trusted name in spiritual guidance, helping thousands transform their lives through ancient wisdom."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl" }), /* @__PURE__ */ jsx("img", {
						src: about_astrologer_default,
						alt: "Astrologer",
						loading: "lazy",
						className: "relative rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Our Story"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-3xl md:text-5xl font-bold leading-tight",
							children: ["A Spiritual Journey of ", /* @__PURE__ */ jsx("span", {
								className: "text-gradient-primary",
								children: "Service & Wisdom"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "Sri Durga Matha Astrology was founded with a sacred mission — to bring ancient astrological wisdom to those navigating modern life's challenges. For over 15 years, we have guided thousands of families across Andhra Pradesh and beyond, offering authentic solutions rooted in Vedic tradition."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "Based in Eluru, our practice combines deep spiritual knowledge with personal compassion. Whether it's a love problem, a career obstacle, or protection from negative energies, every consultation is approached with sincerity, secrecy, and the blessings of Maa Durga."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-muted",
			children: /* @__PURE__ */ jsx("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-3 gap-6",
				children: [
					{
						icon: Eye,
						title: "Our Vision",
						text: "To become a trusted source of astrological guidance helping people overcome challenges and achieve happiness."
					},
					{
						icon: Target,
						title: "Our Mission",
						text: "To provide authentic astrology services and spiritual solutions with honesty and dedication."
					},
					{
						icon: Heart,
						title: "Our Values",
						text: "Integrity, compassion, and confidentiality in every consultation we provide to our clients."
					}
				].map((it) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-card p-8 shadow-card hover:-translate-y-1 transition-transform",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4",
							children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6 text-primary-foreground" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl font-bold mb-3",
							children: it.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: it.text
						})
					]
				}, it.title))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative py-24 bg-cosmos text-cosmos-foreground overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(StarField, { density: 50 }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative container mx-auto px-6 md:px-10 lg:px-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-14 text-center",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold",
							children: "A legacy of trust"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-3xl font-bold md:text-4xl",
							children: "Guidance That Makes a Difference"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-7",
						children: [
							{
								icon: Users,
								num: "5000+",
								label: "Happy Clients"
							},
							{
								icon: Clock3,
								num: "15+",
								label: "Years Experience"
							},
							{
								icon: BadgeCheck,
								num: "98%",
								label: "Success Rate"
							},
							{
								icon: Headphones,
								num: "24/7",
								label: "Support"
							}
						].map((s) => /* @__PURE__ */ jsxs("div", {
							className: "group relative rounded-2xl border border-cosmos-foreground/10 bg-cosmos-foreground/5 px-3 pb-7 pt-10 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-cosmos-foreground/10 md:px-6 md:pb-9 md:pt-12",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-cosmos text-gold shadow-glow md:h-14 md:w-14",
									children: /* @__PURE__ */ jsx(s.icon, {
										className: "h-5 w-5 md:h-6 md:w-6",
										strokeWidth: 1.6
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "font-display text-4xl font-bold text-gradient-gold md:text-5xl lg:text-6xl",
									children: s.num
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cosmos-foreground/70 md:text-xs md:tracking-[0.22em]",
									children: s.label
								})
							]
						}, s.label))
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-5xl font-bold text-center mb-12",
					children: ["What ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient-primary",
						children: "Clients Say"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: TESTIMONIALS.slice(0, 3).map((t) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl p-7 bg-card shadow-card",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-1 text-gold mb-4",
								children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "italic text-foreground/80 mb-4",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "font-semibold",
								children: [
									t.name,
									" ",
									/* @__PURE__ */ jsxs("span", {
										className: "text-muted-foreground font-normal text-sm",
										children: ["· ", t.role]
									})
								]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16 bg-gradient-primary text-primary-foreground text-center",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl md:text-4xl font-bold mb-3",
						children: "Ready to Transform Your Life?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-white/85 mb-6",
						children: "Speak directly with our astrologer today."
					}),
					/* @__PURE__ */ jsxs("a", {
						href: SITE.phoneHref,
						className: "inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform",
						children: [
							/* @__PURE__ */ jsx(Check, { className: "h-5 w-5" }),
							" Call ",
							SITE.phone
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
