(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GalleryPage() {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryPage.useEffect": ()=>{
            fetchImages();
            checkAuth();
        }
    }["GalleryPage.useEffect"], []);
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
    const checkAuth = async ()=>{
        try {
            const res = await fetch("/api/auth");
            const data = await res.json();
            setUser(data.user);
        } catch  {
            setUser(null);
        }
    };
    const handleUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file || !user) return;
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
            }
        } catch (error) {
            console.error("Upload failed:", error);
        } finally{
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-[#0D1B2A] dark:via-[#1B2838] dark:to-[#0D1B2A] mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4",
                                    children: "Our Gallery"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 dark:text-gray-300",
                                    children: "Explore our work and achievements"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "cursor-pointer px-6 py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2",
                                children: [
                                    uploading ? "Uploading..." : "Upload Image",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: "image/jpeg,image/png,image/webp",
                                        onChange: handleUpload,
                                        className: "hidden",
                                        disabled: uploading
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "inline-block px-6 py-3 bg-[#1E73BE] text-white rounded-xl font-semibold hover:bg-[#155aa8] transition",
                                children: "Login to Upload"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-gray-50 dark:bg-[#0a1421]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 border-4 border-[#1E73BE] border-t-transparent rounded-full animate-spin mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 127,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, this) : images.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400 text-lg",
                            children: "No images yet"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 131,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative aspect-square rounded-2xl overflow-hidden cursor-pointer",
                                style: {
                                    animationDelay: `${index * 100}ms`
                                },
                                onClick: ()=>setSelectedImage(image.image_url),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: image.image_url,
                                        alt: "Gallery",
                                        fill: true,
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white text-sm font-medium",
                                            children: [
                                                "Uploaded by ",
                                                image.uploaded_by_name || "Unknown"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/30 rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#1E73BE]/20"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, image.id, true, {
                                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm",
                onClick: ()=>setSelectedImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selectedImage,
                            alt: "Preview",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition",
                            onClick: ()=>setSelectedImage(null),
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/gallery/page.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(GalleryPage, "Z4Dh83Nr8CMxyXKG6BdT9dCSUfM=");
_c = GalleryPage;
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=d63ac_solution-website%20%282%29_manhar-total-solution-website_app_gallery_page_tsx_d729f838._.js.map