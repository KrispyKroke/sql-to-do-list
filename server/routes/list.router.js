const express = require('express');
const router = express.Router();
// Connects server to database for data manipulation
const pool = require('../modules/pool.js');


// Server-side GET route. Queries the database to retrieve all tasks stored in it and sends them back
// to the front-end upon successful retrieval.
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM tasks;';
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let task = req.body;
    let queryText = `INSERT INTO tasks ("task") 
    VALUES ($1);`;
    pool.query(queryText, [task.task]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});







module.exports = router;