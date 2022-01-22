const express = require('express');
const router = express.Router();
// Connects server to database for data manipulation
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM tasks;';
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});







module.exports = router;