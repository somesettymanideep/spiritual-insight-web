import { n as SITE } from "./site-DHTALTzq.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-CbAAsNZe.js";
import { t as ConsultationForm } from "./ConsultationForm-fDmQrePD.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "Contact Us",
			subtitle: "We're here to help. Reach out for confidential astrology guidance anytime."
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-20 bg-background",
			children: [/* @__PURE__ */ jsx("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-3 gap-6 mb-16",
				children: [
					{
						icon: MapPin,
						title: "Visit Us",
						value: SITE.address
					},
					{
						icon: Phone,
						title: "Call Us",
						value: SITE.phone,
						href: SITE.phoneHref
					},
					{
						icon: Mail,
						title: "Email Us",
						value: SITE.email,
						href: `mailto:${SITE.email}`
					}
				].map((it) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 transition-transform",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4",
							children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6 text-primary-foreground" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-xl font-semibold mb-2",
							children: it.title
						}),
						it.href ? /* @__PURE__ */ jsx("a", {
							href: it.href,
							className: "text-muted-foreground hover:text-primary break-words",
							children: it.value
						}) : /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: it.value
						})
					]
				}, it.title))
			}), /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 items-start",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Send a Message"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-3xl md:text-4xl font-bold mt-2 mb-4",
						children: ["Let's Begin Your ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Spiritual Journey"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mb-6",
						children: "Fill out the form and our astrologer will personally get back to you within 24 hours. Every message is treated with complete confidentiality."
					}),
					/* @__PURE__ */ jsxs("a", {
						href: SITE.whatsapp,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-6 py-3 shadow-elegant hover:scale-105 transition-transform",
						children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }), " Chat on WhatsApp"]
					})
				] }), /* @__PURE__ */ jsx(ConsultationForm, {})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "pb-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "container mx-auto px-6 md:px-10 lg:px-16",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-3xl overflow-hidden shadow-elegant border border-border h-[500px]",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "Sri Durga Matha Astrology location",
						src: "https://www.google.com/maps?q=Pedavegi,+Eluru,+Andhra+Pradesh+534003&output=embed",
						loading: "lazy",
						className: "w-full h-full border-0",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
