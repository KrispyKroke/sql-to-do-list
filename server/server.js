const express = require('express');

const app = express();
const PORT = 5000;

const router = require('./routes/list.router.js');


app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));

// Sets up route to funnel everything with the url ending in /list to the list.router.js file
app.use('/list', router);




app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})