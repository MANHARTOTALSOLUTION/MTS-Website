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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparePassword",
    ()=>comparePassword,
    "generateRefreshToken",
    ()=>generateRefreshToken,
    "generateToken",
    ()=>generateToken,
    "hashPassword",
    ()=>hashPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'manhar-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';
async function hashPassword(password) {
    const salt = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].genSalt(10);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, salt);
}
async function comparePassword(password, hashedPassword) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hashedPassword);
}
function generateToken(user) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(user, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
}
function verifyToken(token) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
}
function generateRefreshToken(user) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(user, JWT_SECRET + '-refresh', {
        expiresIn: '30d'
    });
}
}),
"[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/app/api/auth/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/manhar-total-solution-website (2)/manhar-total-solution-website/lib/auth.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { action, name, email, password } = body;
        if (action === 'register') {
            if (!name || !email || !password) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Name, email and password are required'
                }, {
                    status: 400
                });
            }
            const existingUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('SELECT id FROM users WHERE email = $1', [
                email
            ]);
            if (existingUser.rows.length > 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Email already registered'
                }, {
                    status: 400
                });
            }
            const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(password);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, role', [
                name,
                email,
                hashedPassword
            ]);
            const user = result.rows[0];
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateToken"])({
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            });
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'User registered successfully',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            }, {
                status: 201
            });
            response.cookies.set('token', token, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            });
            return response;
        }
        if (action === 'login') {
            if (!email || !password) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Email and password are required'
                }, {
                    status: 400
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('SELECT * FROM users WHERE email = $1', [
                email
            ]);
            if (result.rows.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid credentials'
                }, {
                    status: 401
                });
            }
            const user = result.rows[0];
            const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comparePassword"])(password, user.password);
            if (!isValid) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid credentials'
                }, {
                    status: 401
                });
            }
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateToken"])({
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            });
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Login successful',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
            response.cookies.set('token', token, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            });
            return response;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid action'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Auth error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        const token = request.cookies.get('token')?.value;
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user: null
            }, {
                status: 200
            });
        }
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$manhar$2d$total$2d$solution$2d$website__$28$2$292f$manhar$2d$total$2d$solution$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: null
        }, {
            status: 200
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6421b0c8._.js.map