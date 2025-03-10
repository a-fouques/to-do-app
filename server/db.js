const { Pool } = require("pg");

const pool = new Pool((
    user: "postgres",
    password: "2002postSql",
    host: "localhost",
    port: 5432,
    database: "todoapp"
));

module.exports = pool;