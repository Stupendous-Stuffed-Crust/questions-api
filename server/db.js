// Connect to PostgreSQL database and export connection instance via db

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

function close() {
  return pool.end();
}

module.exports.pool = pool;
module.exports.close = close;
