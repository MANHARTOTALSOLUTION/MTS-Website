(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginModal({ isOpen, onClose, message }) {
    _s();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { refreshAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    if (!isOpen) return null;
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError("");
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: isLogin ? "login" : "register",
                    ...formData
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }
            await refreshAuth();
            onClose();
            setFormData({
                name: "",
                email: "",
                password: ""
            });
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-white dark:bg-[#1B2838] rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 animate-in fade-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Logo",
                                width: 50,
                                height: 50,
                                className: "mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-[#0D1B2A] dark:text-white",
                                children: isLogin ? "Welcome Back" : "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-orange-500 text-sm mt-2 font-medium",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm mt-1",
                                children: isLogin ? "Sign in to continue" : "Join Manhar Total Solution"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent",
                                        placeholder: "Enter your name",
                                        required: !isLogin
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent",
                                        placeholder: "you@example.com",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "password",
                                        value: formData.password,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent",
                                        placeholder: "••••••••",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "w-full py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50",
                                children: loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-400 text-sm",
                            children: [
                                isLogin ? "Don't have an account?" : "Already have an account?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsLogin(!isLogin);
                                        setError("");
                                    },
                                    className: "text-[#1E73BE] font-semibold hover:underline",
                                    children: isLogin ? "Sign Up" : "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(LoginModal, "mEnYVfO/TJrQDg/3TwOIyc6wEnc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LoginModal;
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$components$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GallerySection() {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLoginModal, setShowLoginModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadMessage, setUploadMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySection.useEffect": ()=>{
            fetchImages();
            const observer = new IntersectionObserver({
                "GallerySection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["GallerySection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "GallerySection.useEffect": ()=>observer.disconnect()
            })["GallerySection.useEffect"];
        }
    }["GallerySection.useEffect"], []);
    const fetchImages = async ()=>{
        try {
            const res = await fetch("/api/gallery");
            const data = await res.json();
            setImages(data.images || []);
        } catch (error) {
            console.error("Failed to fetch images:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleUploadClick = ()=>{
        if (!user) {
            setShowLoginModal(true);
            setUploadMessage("Login required to upload images");
            return;
        }
        setShowUploadModal(true);
    };
    const handleUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await fetch("/api/gallery", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            if (data.image) {
                setImages([
                    data.image,
                    ...images
                ]);
                setShowUploadModal(false);
            } else {
                setUploadMessage(data.error || "Upload failed");
            }
        } catch (error) {
            console.error("Upload failed:", error);
            setUploadMessage("Upload failed");
        } finally{
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "min-h-screen py-20 bg-gradient-to-br from-slate-900 via-[#0D1B2A] to-slate-900 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4 text-orange-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-300 font-medium",
                                        children: "Our Gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl lg:text-5xl font-bold text-white mb-4",
                                children: "Captured Moments"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-400 max-w-2xl mx-auto",
                                children: "Explore our journey through visuals - a collection of memories, achievements, and milestones"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex justify-center mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadClick,
                            className: "group relative px-8 py-4 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#1E73BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-3 text-white font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-white/30 rounded-full animate-ping"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Add Your Image"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-2xl ring-2 ring-white/30 group-hover:ring-white/60 transition-all duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 border-4 border-[#1E73BE] border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this) : images.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-10 h-10 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-lg",
                                children: "No images yet. Be the first to upload!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6",
                        children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 delay-${Math.min(index * 100, 500)} transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`,
                                style: {
                                    transformStyle: "preserve-3d",
                                    perspective: "1000px"
                                },
                                onMouseEnter: ()=>setHoveredIndex(index),
                                onMouseLeave: ()=>setHoveredIndex(null),
                                onClick: ()=>setSelectedImage(image.image_url),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full transition-all duration-300",
                                        style: {
                                            transform: hoveredIndex === index ? "rotateX(5deg) rotateY(-5deg) scale(1.05)" : "rotateX(0) rotateY(0) scale(1)",
                                            boxShadow: hoveredIndex === index ? "0 25px 50px -12px rgba(30, 115, 190, 0.4), 0 0 30px rgba(255, 140, 66, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: image.image_url,
                                                alt: "Gallery",
                                                fill: true,
                                                className: "object-cover transition-all duration-500 hover:scale-110",
                                                sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 p-4 z-30 translate-y-full hover:translate-y-0 transition-transform duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-sm font-medium truncate",
                                                        children: image.uploaded_by_name || "Anonymous"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/70 text-xs",
                                                        children: new Date(image.uploaded_at).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, image.id, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in",
                onClick: ()=>setSelectedImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-5xl w-full aspect-auto max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selectedImage,
                            alt: "Preview",
                            width: 1200,
                            height: 800,
                            className: "w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition backdrop-blur-sm",
                            onClick: ()=>setSelectedImage(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                    lineNumber: 218,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                        onClick: ()=>setShowUploadModal(false)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-md bg-white dark:bg-[#1B2838] rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUploadModal(false),
                                className: "absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] rounded-2xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-[#0D1B2A] dark:text-white",
                                        children: "Upload Image"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 text-sm mt-1",
                                        children: "Share your moment with us"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            uploadMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm",
                                children: uploadMessage
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                accept: "image/jpeg,image/png,image/webp",
                                onChange: handleUpload,
                                className: "w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#1E73BE] file:text-white hover:file:bg-[#155aa8] cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-3 text-center",
                                children: "Max 5MB • JPG, PNG, WebP"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fileInputRef.current?.click(),
                                disabled: uploading,
                                className: "w-full mt-6 py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2",
                                children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        "Uploading..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        "Choose Image"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$components$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showLoginModal,
                onClose: ()=>{
                    setShowLoginModal(false);
                    setUploadMessage("");
                },
                message: uploadMessage
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/gallery-section.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(GallerySection, "fNR2cGD4U5YtaW9/6ddq2e68yGU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = GallerySection;
var _c;
__turbopack_context__.k.register(_c, "GallerySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$components$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/login-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReviewsSection() {
    _s();
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showReviewModal, setShowReviewModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLoginModal, setShowLoginModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginMessage, setLoginMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rating: 5,
        message: ""
    });
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsSection.useEffect": ()=>{
            fetchReviews();
            const observer = new IntersectionObserver({
                "ReviewsSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["ReviewsSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "ReviewsSection.useEffect": ()=>observer.disconnect()
            })["ReviewsSection.useEffect"];
        }
    }["ReviewsSection.useEffect"], []);
    const fetchReviews = async ()=>{
        try {
            const res = await fetch("/api/reviews");
            const data = await res.json();
            setReviews(data.reviews || []);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleReviewClick = ()=>{
        if (!user) {
            setShowLoginModal(true);
            setLoginMessage("Login required to leave a review");
            return;
        }
        setShowReviewModal(true);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        setError("");
        try {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: user?.name,
                    rating: formData.rating,
                    message: formData.message
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to submit review");
            }
            setReviews([
                data.review,
                ...reviews
            ]);
            setShowReviewModal(false);
            setFormData({
                rating: 5,
                message: ""
            });
        } catch (err) {
            setError(err.message);
        } finally{
            setSubmitting(false);
        }
    };
    const renderStars = (rating, interactive = false, onChange)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: [
                1,
                2,
                3,
                4,
                5
            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    disabled: !interactive,
                    onClick: ()=>interactive && onChange?.(star),
                    className: `transition-all duration-200 ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: `w-5 h-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"} ${interactive ? "hover:fill-yellow-300" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, star, false, {
                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this);
    };
    const getAverageRating = ()=>{
        if (reviews.length === 0) return 0;
        return (reviews.reduce((acc, r)=>acc + r.rating, 0) / reviews.length).toFixed(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0D1B2A] dark:via-[#1B2838] dark:to-[#0D1B2A] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1B2838] rounded-full mb-4 border border-gray-200 dark:border-gray-700 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "w-4 h-4 text-[#1E73BE]"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                        children: "Customer Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl lg:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4",
                                children: "What Our Clients Say"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                                children: "Real feedback from our valued customers"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-8 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold text-[#1E73BE]",
                                                children: getAverageRating()
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: renderStars(Math.round(Number(getAverageRating())))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-12 bg-gray-300 dark:bg-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold text-[#0D1B2A] dark:text-white",
                                                children: reviews.length
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: "Reviews"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex justify-center mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleReviewClick,
                            className: "group relative px-8 py-4 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#1E73BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-3 text-white font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Leave a Review"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 border-4 border-[#1E73BE] border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this) : reviews.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-[#1B2838] rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "w-10 h-10 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 dark:text-gray-400 text-lg",
                                children: "No reviews yet. Be the first to share your experience!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: reviews.map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group relative bg-white dark:bg-[#1B2838] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 delay-${Math.min(index * 100, 500)} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                                style: {
                                    transformStyle: "preserve-3d"
                                },
                                onMouseEnter: ()=>setHoveredIndex(index),
                                onMouseLeave: ()=>setHoveredIndex(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1E73BE]/20 to-[#FF8C42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-[1px] rounded-2xl bg-white dark:bg-[#1B2838]"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] rounded-full flex items-center justify-center",
                                                                children: review.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-bold text-lg",
                                                                    children: review.name.charAt(0).toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "w-6 h-6 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-[#0D1B2A] dark:text-white",
                                                                        children: review.name || "Anonymous"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: new Date(review.created_at).toLocaleDateString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this),
                                                    renderStars(review.rating)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-300 leading-relaxed",
                                                children: review.message
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300",
                                        style: {
                                            transform: hoveredIndex === index ? "translateZ(20px)" : "translateZ(0)",
                                            boxShadow: hoveredIndex === index ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, review.id, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            showReviewModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                        onClick: ()=>setShowReviewModal(false)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-md bg-white dark:bg-[#1B2838] rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReviewModal(false),
                                className: "absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] rounded-2xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-[#0D1B2A] dark:text-white",
                                        children: "Share Your Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 text-sm mt-1",
                                        children: "Your feedback helps us improve"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Your Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center",
                                                children: renderStars(formData.rating, true, (r)=>setFormData({
                                                        ...formData,
                                                        rating: r
                                                    }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Your Review"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: formData.message,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        message: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] resize-none",
                                                rows: 4,
                                                placeholder: "Tell us about your experience...",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: submitting,
                                        className: "w-full py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50",
                                        children: submitting ? "Submitting..." : "Submit Review"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                lineNumber: 262,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$components$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showLoginModal,
                onClose: ()=>{
                    setShowLoginModal(false);
                    setLoginMessage("");
                },
                message: loginMessage
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/components/reviews-section.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(ReviewsSection, "M+jekv+gPpaJl2tOMGjkysmEX3A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ReviewsSection;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ef0b8_har-total-solution-website%20%282%29_manhar-total-solution-website_components_5a0c45a4._.js.map