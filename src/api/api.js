'use strict';

const router = require('../lib/router.js');
const fs = require('fs');

function makeStatusCode(res) {
    res.setHeader = 'text/html'
    res.statusCode = 200;
    res.statusMessage = 'good';

};

router.get('/', (req, res) => {
    makeStatusCode(res);

    fs.readFile('index.html', (err, data) => {

        let dataString = data.toString();
        let filler = 'This is the homepage'
        res.write(dataString.replace('{{food}}', filler));
        res.end();
    });
})

router.get('/api/v1/food', (req, res) => {
    const id = req.query.id;
    if(id){
        res.statusCode = 200;
        res.statusMessage = `ID: ${req.query.id} was requested`;
        res.write(res.statusMessage);
        res.end();
    } else {
        res.statusCode = 400;
        res.statusMessage = 'Bad ID';
        res.write(res.statusMessage);
    }
});

router.post('/api/v1/food', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'good';
    res.write(JSON.stringify(req.body));
    res.end();
});

router.delete('/api/v1/food', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = `ID: ${req.query.id} was requested`;
    res.write(res.statusMessage);
    res.end();
});

module.exports = {};
