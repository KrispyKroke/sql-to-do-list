const pg = require('pg');

const Pool = pg.Pool;
// Instantiating a pool to bring in the database from Postico
const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

module.exports = pool;