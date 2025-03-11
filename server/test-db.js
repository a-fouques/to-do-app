require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "2002postSql", 
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "todoapp"
});

async function testConnection() {
    try {
        await client.connect();
        console.log("✅ Connected to PostgreSQL successfully!");
        const res = await client.query("SELECT NOW();");
        console.log("🕒 Server Time:", res.rows[0]);
        await client.end();
    } catch (err) {
        console.error("❌ Database Connection Failed:", err);
    }
}

testConnection();
