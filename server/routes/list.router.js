const express = require('express');
const router = express.Router();
// Connects server to database for data manipulation
const pool = require('../modules/pool.js');


// Server-side GET request. Queries the database to retrieve all tasks stored in it and sends them back
// to the front-end upon successful retrieval.
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM tasks ORDER BY "completionStatus";';
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

// Server-side POST request. Gets a task from the front-end and adds it to the database.  Sends back a 201 Created 
// status on successful POST.
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

// Server-side DELETE request. Targets a task by id and deletes it from the database when request 
// encounters no errors. Sends back a 204 No Content status code.
router.delete('/:id', (req, res) => {
    let taskID = req.params.id;
    let queryText = `DELETE FROM tasks WHERE "id" = $1;`;
    pool.query(queryText, [taskID]).then(() => {
        res.sendStatus(204);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

// Server-side PUT request. Targets a task by id and changes its completion status to true or false 
// depending on its current status on the front-end. Will implement the ability to toggle between completed and
// uncompleted on the front-end.
router.put('/:id', (req, res) => {
    let taskID = req.params.id;
    let completionStatus = req.body.completionStatus;
    let queryText = `UPDATE tasks SET "completionStatus" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [completionStatus, taskID]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});






module.exports = router;