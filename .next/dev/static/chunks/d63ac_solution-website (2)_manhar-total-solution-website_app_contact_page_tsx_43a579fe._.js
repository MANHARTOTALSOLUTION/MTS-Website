(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/lib/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Contact() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Contact form submitted:", formData);
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        }, 5000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-20 pb-20 bg-white dark:bg-[#0D1B2A]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-[#0D1B2A] dark:text-white mb-4",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300",
                                children: "Get in touch with our team. We're here to help!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"], {
                                        className: "w-8 h-8 text-[#1E73BE] mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                                        children: "Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300 mb-4",
                                        children: "+91 99241 97765"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+919924197765",
                                        className: "text-[#1E73BE] hover:underline font-semibold",
                                        children: "Call Now"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailIcon"], {
                                        className: "w-8 h-8 text-[#FF8C42] mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300 mb-4",
                                        children: "manhartotalsolution@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:manhartotalsolution@gmail.com",
                                        className: "text-[#FF8C42] hover:underline font-semibold",
                                        children: "Send Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-8 border border-green-200 dark:border-green-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 mb-4 text-[#25D366]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.746c0 5.432 4.424 9.846 9.846 9.846a9.823 9.823 0 009.847-9.847c0-5.422-4.424-9.746-9.848-9.746m7.841 15.36c-1.88 1.119-4.046 1.759-6.357 1.759-7.046 0-12.773-5.727-12.773-12.773S4.614 1.227 11.66 1.227c7.046 0 12.773 5.727 12.773 12.773 0 2.311-.64 4.477-1.759 6.357l1.21 4.409-4.508-1.21z"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                                        children: "WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300 mb-4",
                                        children: "+91 99241 97765"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/919924197765",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-[#25D366] hover:underline font-semibold",
                                        children: "Message Us"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#1B2838] rounded-2xl border border-gray-100 dark:border-gray-700 p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 dark:text-white mb-6",
                                        children: "Send us a Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200",
                                        children: "✓ Message sent successfully! We'll reply soon."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "name",
                                                        value: formData.name,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        name: "email",
                                                        value: formData.email,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        name: "phone",
                                                        value: formData.phone,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        name: "message",
                                                        value: formData.message,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent resize-none",
                                                        rows: 5,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold",
                                                children: "Send Message"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-200 dark:bg-[#1B2838]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                width: "100%",
                                                height: "100%",
                                                style: {
                                                    border: 0
                                                },
                                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4552.2200001207475!2d72.53338807606428!3d23.70482859052301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c51b11ebc6029%3A0x4d4328b461ecd5fe!2sManhar%20Total%20Solution!5e1!3m2!1sen!2sin!4v1771164741806!5m2!1sen!2sin",
                                                allowFullScreen: true,
                                                loading: "lazy",
                                                referrerPolicy: "no-referrer-when-downgrade"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 dark:bg-[#1B2838] rounded-xl p-6 border border-gray-100 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapPinIcon"], {
                                                        className: "w-5 h-5 text-[#1E73BE]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Our Location"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                                children: [
                                                    "Manhar Total Solution",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    "New Delhi, India",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "dark:text-white",
                                                        children: "Business Hours:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Monday - Friday: 9:00 AM - 6:00 PM",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Saturday: 10:00 AM - 4:00 PM",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Sunday: Closed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/contact/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Contact, "8nLtRkKHd8ymoyoMm+JnWa+reIo=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=d63ac_solution-website%20%282%29_manhar-total-solution-website_app_contact_page_tsx_43a579fe._.js.map