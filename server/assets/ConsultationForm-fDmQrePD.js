import { t as SERVICES } from "./site-DHTALTzq.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Send } from "lucide-react";
//#region src/components/ConsultationForm.tsx
function ConsultationForm({ compact = false }) {
	const [sent, setSent] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit,
		className: `glass-light rounded-2xl p-6 md:p-8 shadow-elegant space-y-4 ${compact ? "" : ""}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ jsx(Input, {
						label: "Full Name",
						name: "name",
						required: true
					}),
					/* @__PURE__ */ jsx(Input, {
						label: "Phone Number",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ jsx(Input, {
						label: "Email Address",
						name: "email",
						type: "email",
						required: true
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsxs("select", {
							required: true,
							className: "peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none",
							defaultValue: "",
							children: [/* @__PURE__ */ jsx("option", {
								value: "",
								disabled: true,
								children: "Select Service"
							}), SERVICES.map((s) => /* @__PURE__ */ jsx("option", {
								value: s.slug,
								children: s.title
							}, s.slug))]
						}), /* @__PURE__ */ jsx("label", {
							className: "absolute left-4 top-1.5 text-xs text-muted-foreground",
							children: "Service Required"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("textarea", {
					name: "message",
					rows: 4,
					placeholder: " ",
					className: "peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
				}), /* @__PURE__ */ jsx("label", {
					className: "absolute left-4 top-1.5 text-xs text-muted-foreground",
					children: "Message"
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-elegant hover:scale-[1.02] transition-transform",
				children: sent ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }), " Request Sent — We'll call you"] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }), " Book Consultation"] })
			})
		]
	});
}
function Input({ label, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("input", {
			...props,
			placeholder: " ",
			className: "peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
		}), /* @__PURE__ */ jsx("label", {
			className: "absolute left-4 top-1.5 text-xs text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { ConsultationForm as t };
