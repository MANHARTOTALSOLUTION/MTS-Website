module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getClient",
    ()=>getClient,
    "pool",
    ()=>pool,
    "query",
    ()=>query,
    "testConnection",
    ()=>testConnection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
console.log('📦 Database: Initializing connection pool...');
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000
});
pool.on('connect', ()=>{
    console.log('✅ Database: New client connected to PostgreSQL');
});
pool.on('error', (err)=>{
    console.error('❌ Database: Unexpected error on idle client', err.message);
});
pool.on('remove', ()=>{
    console.log('🔌 Database: Client disconnected');
});
const query = async (text, params)=>{
    console.log('📝 Database: Executing query:', text.substring(0, 50) + '...');
    const start = Date.now();
    try {
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        console.log(`✅ Database: Query executed in ${duration}ms, returned ${res.rowCount} rows`);
        return res;
    } catch (error) {
        console.error('❌ Database: Query error:', error.message);
        throw error;
    }
};
const getClient = async ()=>{
    console.log('🔗 Database: Getting client from pool...');
    const client = await pool.connect();
    return client;
};
const testConnection = async ()=>{
    try {
        const result = await pool.query('SELECT NOW() as current_time, version() as pg_version');
        console.log('✅ Database: Connection successful!');
        console.log('   Server Time:', result.rows[0].current_time);
        console.log('   PostgreSQL Version:', result.rows[0].pg_version.substring(0, 30));
        return {
            success: true,
            time: result.rows[0].current_time,
            version: result.rows[0].pg_version
        };
    } catch (error) {
        console.error('❌ Database: Connection failed!');
        console.error('   Error:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
};
const __TURBOPACK__default__export__ = pool;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/api/reviews/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GET() {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('SELECT * FROM customer_reviews ORDER BY created_at DESC');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reviews: result.rows
        });
    } catch (error) {
        console.error('Reviews GET error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch reviews'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { name, rating, message } = body;
        if (!name || !rating || !message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Name, rating and message are required'
            }, {
                status: 400
            });
        }
        if (rating < 1 || rating > 5) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Rating must be between 1 and 5'
            }, {
                status: 400
            });
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('INSERT INTO customer_reviews (name, rating, message) VALUES ($1, $2, $3) RETURNING *', [
            name,
            rating,
            message
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Review added successfully',
            review: result.rows[0]
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Reviews POST error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to add review'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__da7ef1ef._.js.map