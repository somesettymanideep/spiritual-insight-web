import { n as SITE, r as TESTIMONIALS, t as SERVICES } from "./site-DHTALTzq.js";
import { n as SiteLayout, r as StarField } from "./SiteLayout-CBjK6OEi.js";
import { t as about_astrologer_default } from "./about-astrologer-DzdoGZ42.js";
import { t as ConsultationForm } from "./ConsultationForm-fDmQrePD.js";
import { n as cn, t as Button } from "./button-BpE9Czok.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Phone, Sparkles, Star, Users } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
var jupiter_webp_asset_default = {
	asset_id: "bfa9c5f3-1aa3-48df-baef-5d1f95b3ebe1",
	content_type: "image/webp",
	created_at: "2026-06-13T07:44:36Z",
	original_filename: "jupiter.webp",
	project_id: "5a02772a-c488-4975-b6de-e98c7af3aba5",
	r2_key: "a/v1/5a02772a-c488-4975-b6de-e98c7af3aba5/bfa9c5f3-1aa3-48df-baef-5d1f95b3ebe1/jupiter.webp",
	size: 5612,
	url: "/__l5e/assets-v1/bfa9c5f3-1aa3-48df-baef-5d1f95b3ebe1/jupiter.webp",
	version: 1
};
var cta_video_mp4_asset_default = {
	version: 1,
	asset_id: "1d534e87-145e-448e-9099-659fd134b780",
	project_id: "5a02772a-c488-4975-b6de-e98c7af3aba5",
	url: "/__l5e/assets-v1/1d534e87-145e-448e-9099-659fd134b780/cta-video.mp4",
	r2_key: "a/v1/5a02772a-c488-4975-b6de-e98c7af3aba5/1d534e87-145e-448e-9099-659fd134b780/cta-video.mp4",
	original_filename: "cta-video.mp4",
	size: 15469589,
	content_type: "video/mp4",
	created_at: "2026-06-15T05:57:51Z"
};
//#endregion
//#region src/components/ui/carousel.tsx
var CarouselContext = React.createContext(null);
function useCarousel() {
	const context = React.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);
	const onSelect = React.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var HERO_VIDEO = "https://res.cloudinary.com/dzj6s8hha/video/upload/v1781334801/banner-bg_i2dyhl.mp4";
function HomePage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(About, {}),
		/* @__PURE__ */ jsx(Services, {}),
		/* @__PURE__ */ jsx(WhyChoose, {}),
		/* @__PURE__ */ jsx(Stats, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(Consultation, {}),
		/* @__PURE__ */ jsx(CTABanner, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cosmos text-cosmos-foreground",
		children: [
			/* @__PURE__ */ jsx("video", {
				src: HERO_VIDEO,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-cosmos/85 via-cosmos/60 to-transparent" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative container mx-auto px-6 md:px-10 lg:px-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-6 animate-fade-up max-w-2xl text-left",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-gold",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), " Trusted Spiritual Guidance"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient-gold",
									children: "SRI DURGA MATHA"
								}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-white",
									children: "ASTROLOGY"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg md:text-xl text-white/90 font-medium",
							children: "Trusted Astrology Solutions for Love, Marriage, Career & Spiritual Guidance"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/75 leading-relaxed",
							children: "Get accurate predictions and effective spiritual remedies from experienced astrology specialists. Helping people overcome life's challenges through ancient astrological wisdom."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-3 pt-2",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "#consultation",
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-elegant hover:scale-105 transition-transform",
								children: [/* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5" }), " Book Consultation"]
							}), /* @__PURE__ */ jsxs("a", {
								href: SITE.phoneHref,
								className: "inline-flex items-center gap-2 rounded-full glass text-white font-semibold px-6 py-3.5 hover:bg-white/20 transition-colors",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }), " Call Now"]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 pt-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center animate-glow-pulse",
								children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-gold-foreground" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs text-white/70 uppercase tracking-wider",
								children: "24/7 Available"
							}), /* @__PURE__ */ jsx("a", {
								href: SITE.phoneHref,
								className: "text-xl font-bold text-white hover:text-gold transition-colors",
								children: SITE.phone
							})] })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-1 animate-float",
				children: [/* @__PURE__ */ jsx("span", { children: "Scroll" }), /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-white/40" })]
			})
		]
	});
}
function About() {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 md:py-28 bg-background relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]",
						children: [/* @__PURE__ */ jsx("img", {
							src: about_astrologer_default,
							alt: "Sri Durga Matha Astrologer",
							loading: "lazy",
							className: "w-full h-full object-cover"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-cosmos/60 to-transparent" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute -bottom-6 -right-6 md:-right-10 glass-light rounded-2xl p-5 shadow-elegant max-w-[200px]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-4xl font-display font-bold text-gradient-primary",
							children: "15+"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Years of Spiritual Practice"
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-end mb-[70px]",
						children: /* @__PURE__ */ jsx("img", {
							src: jupiter_webp_asset_default.url,
							alt: "",
							"aria-hidden": "true",
							loading: "lazy",
							className: "pointer-events-none w-20 h-20 select-none z-20 drop-shadow-lg",
							style: { transform: `rotate(${scrollY * .4}deg)` }
						})
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "About Us"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-3xl md:text-5xl font-bold leading-tight",
						children: [
							"About ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-primary",
								children: "Sri Durga Matha"
							}),
							" Astrology"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-lg",
						children: "With years of experience in astrology and spiritual guidance, Sri Durga Matha Astrology provides trusted solutions for love, marriage, family, career, and spiritual problems. We help individuals find peace, happiness, and success through accurate predictions and effective remedies."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "grid sm:grid-cols-2 gap-3 pt-2",
						children: [
							"Trusted Guidance",
							"Accurate Predictions",
							"Spiritual Solutions",
							"Personalized Consultation"
						].map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 p-3 rounded-xl glass-light",
							children: [/* @__PURE__ */ jsx("span", {
								className: "h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary-foreground" })
							}), /* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: f
							})]
						}, f))
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/about",
						className: "inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all",
						children: ["Discover Our Story ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-20 md:py-28 bg-muted relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 opacity-30",
			style: { background: "var(--gradient-radial)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative container mx-auto px-6 md:px-10 lg:px-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "What We Offer"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-3xl md:text-5xl font-bold mt-2",
						children: ["Our ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Astrology Services"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: "Authentic spiritual solutions for every challenge in life — backed by ancient wisdom and decades of experience."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs("article", {
					className: "group relative rounded-2xl bg-card shadow-card hover:-translate-y-2 hover:shadow-elegant transition-all duration-300 border border-transparent hover:border-primary/30 overflow-hidden mb-6",
					style: { animationDelay: `${i * .05}s` },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [/* @__PURE__ */ jsx("img", {
							src: s.image,
							alt: s.title,
							loading: "lazy",
							width: 1024,
							height: 1024,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-cosmos/80 via-cosmos/10 to-transparent" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-xl font-semibold text-foreground mb-3",
							children: s.title
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all",
							children: ["Read More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})]
				}, s.slug))
			})]
		})]
	});
}
function ConfidentialIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		clipRule: "evenodd",
		fillRule: "evenodd",
		strokeLinejoin: "round",
		strokeMiterlimit: "2",
		viewBox: "0 0 510 510",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", {
			d: "m200.766 85.811h-28.005v-9.676c0-33.622 27.513-61.135 61.135-61.135s61.11 27.513 61.11 61.135h-27.98c0-18.195-14.96-33.156-33.13-33.156s-33.13 14.961-33.13 33.156zm-148.488 409.189c4.949-46.085 43.953-81.978 91.337-81.978 47.408 0 86.412 35.893 91.337 81.978zm91.337-86.978c-25.579 0-46.428-20.874-46.428-46.452 0-25.579 20.849-46.453 46.428-46.453 25.602 0 46.452 20.874 46.452 46.453 0 25.578-20.85 46.452-46.452 46.452zm132.338 86.978c4.949-46.085 43.953-81.978 91.337-81.978 47.408 0 86.412 35.893 91.337 81.978zm91.337-86.978c-25.578 0-46.428-20.874-46.428-46.452 0-25.579 20.85-46.453 46.428-46.453 25.603 0 46.452 20.874 46.452 46.453 0 25.578-20.849 46.452-46.452 46.452zm-31.411-257.248v-37.808c0-7.037-2.701-13.474-7.128-18.312 1.662-.082 3.334-.123 5.015-.123 55.163 0 99.884 44.72 99.884 99.883 0 22.441-7.394 43.131-19.88 59.8l13.783 51.466-61.908-16.572c-10.021 3.34-20.723 5.189-31.879 5.189-30.498 0-57.805-13.67-76.126-35.218h51.083c13.21 0 24.219-9.435 26.654-21.933h44.796c4.416 0 8-3.585 8-8s-3.584-8-8-8h-44.294v-19.186h44.294c4.416 0 8-3.585 8-8 0-4.416-3.584-8-8-8h-44.294v-19.186h44.294c4.416 0 8-3.585 8-8 0-4.416-3.584-8-8-8zm-203.799 84.395c1.61 13.458 13.102 23.91 26.989 23.91h94.59c-3.946 6.052-10.783 10.061-18.526 10.061h-99.783l-43.208 44.979v-44.979h-18.68c-12.164 0-22.089-9.891-22.089-22.055v-110.643c0-12.164 9.925-22.089 22.089-22.089h58.426v34.74h-37.474c-4.415 0-8 3.585-8 8 0 4.416 3.585 8 8 8h37.474v19.055h-37.474c-4.415 0-8 3.584-8 8 0 4.415 3.585 8 8 8h37.474v19.021h-37.474c-4.415 0-8 3.584-8 8 0 4.415 3.585 8 8 8zm26.989-133.358h149.654c6.161 0 11.156 5.021 11.156 11.155v118.958c0 6.16-4.995 11.155-11.156 11.155h-149.654c-6.16 0-11.181-4.995-11.181-11.155v-118.958c0-6.134 5.021-11.155 11.181-11.155zm74.827 28.186c-12.009 0-21.767 9.758-21.767 21.768 0 7.842 4.141 14.701 10.353 18.532v33.182c0 6.289 5.125 11.414 11.414 11.414 6.264 0 11.415-5.125 11.415-11.414v-33.182c6.211-3.831 10.327-10.69 10.327-18.532 0-12.01-9.732-21.768-21.742-21.768z",
			fill: "currentColor"
		}) })
	});
}
function WhyChoose() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 md:py-28 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-6 md:px-10 lg:px-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Why Choose Us"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-5xl font-bold mt-2",
					children: [
						"The ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Trusted Choice"
						}),
						" for Thousands"
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: [
					{
						icon: ConfidentialIcon,
						title: "Confidential Consultations",
						desc: "Your privacy and trust are our top priority."
					},
					{
						icon: Sparkles,
						title: "Trusted Spiritual Guidance",
						desc: "Authentic remedies rooted in ancient wisdom."
					},
					{
						icon: Clock,
						title: "Quick Problem Solutions",
						desc: "Effective results within days of consultation."
					},
					{
						icon: Users,
						title: "24/7 Consultation Support",
						desc: "Available anytime you need guidance."
					}
				].map((it) => /* @__PURE__ */ jsxs("div", {
					className: "text-center rounded-2xl p-7 border border-border bg-card hover:shadow-elegant hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4",
							children: /* @__PURE__ */ jsx(it.icon, { className: "h-7 w-7 text-primary-foreground" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-semibold mb-2",
							children: it.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: it.desc
						})
					]
				}, it.title))
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative py-20 bg-cosmos text-cosmos-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(StarField, { density: 50 }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-40",
				style: { background: "var(--gradient-radial)" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative container mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8",
				children: [
					{
						num: "5000+",
						label: "Happy Clients"
					},
					{
						num: "15+",
						label: "Years Experience"
					},
					{
						num: "98%",
						label: "Success Rate"
					},
					{
						num: "24/7",
						label: "Support Available"
					}
				].map((s) => /* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-5xl md:text-6xl font-bold text-gradient-gold",
						children: s.num
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-2 text-sm uppercase tracking-wider text-white/70",
						children: s.label
					})]
				}, s.label))
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 md:py-28 bg-muted",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-6 md:px-10 lg:px-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Testimonials"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-5xl font-bold mt-2",
					children: ["Voices of ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient-primary",
						children: "Transformed Lives"
					})]
				})]
			}), /* @__PURE__ */ jsxs(Carousel, {
				opts: {
					align: "start",
					loop: true
				},
				className: "w-full max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ jsx(CarouselContent, {
						className: "-ml-4",
						children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsx(CarouselItem, {
							className: "pl-4 md:basis-1/2 lg:basis-1/3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "h-full glass-light rounded-2xl p-7 shadow-card hover:shadow-elegant transition-shadow",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex gap-1 text-gold mb-4",
										children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-foreground/80 italic leading-relaxed mb-5",
										children: [
											"\"",
											t.text,
											"\""
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg",
											children: t.name.charAt(0)
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
											className: "font-semibold text-foreground",
											children: t.name
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-muted-foreground",
											children: t.role
										})] })]
									})
								]
							})
						}, t.name))
					}),
					/* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex" }),
					/* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex" })
				]
			})]
		})
	});
}
function Consultation() {
	return /* @__PURE__ */ jsx("section", {
		id: "consultation",
		className: "py-20 md:py-28 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Free Consultation"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-5xl font-bold mt-2 leading-tight",
					children: ["Get Free ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient-primary",
						children: "Astrology Consultation"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: "Share your problem with us. Our experienced astrologer will provide personalized guidance and effective remedies tailored to your unique situation."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-6 space-y-3",
					children: [
						"100% Confidential discussion",
						"Personalized remedies for your problem",
						"Response within 24 hours"
					].map((t) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary" }),
							" ",
							/* @__PURE__ */ jsx("span", { children: t })
						]
					}, t))
				})
			] }), /* @__PURE__ */ jsx(ConsultationForm, {})]
		})
	});
}
function CTABanner() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative py-20 bg-primary text-primary-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("video", {
				src: cta_video_mp4_asset_default.url,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				className: "absolute inset-0 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/70" }),
			/* @__PURE__ */ jsx(StarField, { density: 40 }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative container mx-auto px-6 md:px-10 lg:px-16 text-center max-w-3xl",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl md:text-5xl font-bold mb-4",
						children: "Need Immediate Astrology Guidance?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-white/85 text-lg mb-8",
						children: "Talk directly with our astrology expert today."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: SITE.phoneHref,
							className: "inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }), " Call Now"]
						}), /* @__PURE__ */ jsx("a", {
							href: SITE.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform",
							children: "WhatsApp Now"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 text-2xl font-bold tracking-wide",
						children: SITE.phone
					})
				]
			})
		]
	});
}
//#endregion
export { HomePage as component };
