// eslint-disable-next-line prefer-destructuring
const Pool = require('pg').Pool;

// eslint-disable-next-line no-unused-vars
const pool = new Pool({
  host: 'localhost',
  database: 'aimtrainerapi',
  port: 5432,
});

module.exports = {};
