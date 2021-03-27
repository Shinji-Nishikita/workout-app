const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOSTNAME,
  port: 5432,
  database: process.env.DB_DATABASE,
});

module.exports = pool;
