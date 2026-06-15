import { t as Route$8 } from "./services._slug-Bh55vYVx.js";
import { t as Route$9 } from "./pooja-prayer._slug-M7Z8-Lk6.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/spiritual-insight-web/assets/styles-CHPIPrVU.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-gradient-primary font-display",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-105 transition-transform",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Please try again."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sri Durga Matha Astrology — Trusted Astrologer in Eluru, Andhra Pradesh" },
			{
				name: "description",
				content: "Trusted astrology solutions for love, marriage, career & spiritual problems. Accurate predictions and effective remedies by experienced astrologers."
			},
			{
				name: "author",
				content: "Sri Durga Matha Astrology"
			},
			{
				property: "og:title",
				content: "Sri Durga Matha Astrology — Trusted Astrologer in Eluru, Andhra Pradesh"
			},
			{
				property: "og:description",
				content: "Trusted astrology solutions for love, marriage, career & spiritual problems. Accurate predictions and effective remedies by experienced astrologers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Sri Durga Matha Astrology — Trusted Astrologer in Eluru, Andhra Pradesh"
			},
			{
				name: "twitter:description",
				content: "Trusted astrology solutions for love, marriage, career & spiritual problems. Accurate predictions and effective remedies by experienced astrologers."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f44a0466-95e8-46e3-a823-82c8512b5df0/id-preview-991e9558--0136ea3c-b131-4e47-a1be-92b3a3c35e3c.lovable.app-1781331835537.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f44a0466-95e8-46e3-a823-82c8512b5df0/id-preview-991e9558--0136ea3c-b131-4e47-a1be-92b3a3c35e3c.lovable.app-1781331835537.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function ScrollToTop() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant"
		});
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(ScrollToTop, {}), /* @__PURE__ */ jsx(Outlet, {})]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.8",
			changefreq: "monthly"
		},
		{
			path: "/services",
			priority: "0.9",
			changefreq: "monthly"
		},
		{
			path: "/contact",
			priority: "0.7",
			changefreq: "monthly"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/pooja-prayer.tsx
var $$splitComponentImporter$5 = () => import("./pooja-prayer-YA-C7xW4.js");
var Route$5 = createFileRoute("/pooja-prayer")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$4 = () => import("./contact-DODm7Dvu.js");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Sri Durga Matha Astrology" },
		{
			name: "description",
			content: "Contact Sri Durga Matha Astrology in Eluru, Andhra Pradesh. Call 9000999664 or send us a message."
		},
		{
			property: "og:title",
			content: "Contact Sri Durga Matha Astrology"
		},
		{
			property: "og:description",
			content: "Reach our astrologer in Eluru for confidential spiritual guidance."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$3 = () => import("./about-CYNIhF02.js");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Sri Durga Matha Astrology" },
		{
			name: "description",
			content: "Learn about Sri Durga Matha Astrology — 15+ years of experience offering trusted astrology and spiritual solutions."
		},
		{
			property: "og:title",
			content: "About Sri Durga Matha Astrology"
		},
		{
			property: "og:description",
			content: "Trusted astrology and spiritual guidance with 15+ years of experience."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$2 = () => import("./routes-Gr2410ZE.js");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sri Durga Matha Astrology — Trusted Astrologer in Eluru" },
		{
			name: "description",
			content: "Get accurate predictions and effective spiritual remedies for love, marriage, career & black magic removal. Call 9000999664."
		},
		{
			property: "og:title",
			content: "Sri Durga Matha Astrology"
		},
		{
			property: "og:description",
			content: "Trusted astrology solutions for love, marriage, career & spiritual guidance."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/services.index.tsx
var $$splitComponentImporter$1 = () => import("./services.index-DTijLVGt.js");
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title: "Astrology Services — Sri Durga Matha Astrology" },
		{
			name: "description",
			content: "Explore our astrology services: black magic removal, love marriage, vashikaran, palm reading, tarot, and more. Call 9000999664."
		},
		{
			property: "og:title",
			content: "Our Astrology Services"
		},
		{
			property: "og:description",
			content: "Authentic spiritual solutions for love, marriage, career & protection."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/pooja-prayer.index.tsx
var $$splitComponentImporter = () => import("./pooja-prayer.index-CfA4i-D_.js");
var Route = createFileRoute("/pooja-prayer/")({
	head: () => ({ meta: [
		{ title: "Pooja & Prayer Services — Sri Durga Matha Astrology" },
		{
			name: "description",
			content: "Book authentic Hindu pooja and prayer services: Ganesh Puja, Durga Matha Puja, Kali Matha Puja, Shiva Puja, Lakshmi Puja, Hanuman Puja, Four Corner Prayer, and International Prayers."
		},
		{
			property: "og:title",
			content: "Pooja & Prayer Services"
		},
		{
			property: "og:description",
			content: "Authentic Hindu pooja and prayer services performed by experienced priests."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var PoojaPrayerRoute = Route$5.update({
	id: "/pooja-prayer",
	path: "/pooja-prayer",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$7
});
var PoojaPrayerIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => PoojaPrayerRoute
});
var ServicesSlugRoute = Route$8.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$7
});
var PoojaPrayerRouteChildren = {
	PoojaPrayerSlugRoute: Route$9.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => PoojaPrayerRoute
	}),
	PoojaPrayerIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PoojaPrayerRoute: PoojaPrayerRoute._addFileChildren(PoojaPrayerRouteChildren),
	SitemapDotxmlRoute,
	ServicesSlugRoute,
	ServicesIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
