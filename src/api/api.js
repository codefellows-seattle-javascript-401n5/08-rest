'use strict';

const router = require('../lib/router.js');

function makeStatusCode(res) {
    res.statusCode = 200;
    res.statusMessage = 'good';

}

router.get('/api/v1/food', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'good';
    let name = req.query.name || '';
    res.write(`Hello ${name}`);
    res.end();
});

router.post('/api/v1/food', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'good';
    res.write(JSON.stringify(req.body));
    res.end();
});

router.put('/api/v1/food', (req, res) => {
    if(req.url.query.id){
        makeStatusCode(res);
        res.write(JSON.stringify(req.body));
        res.end();
    } else {
        res.stausCode = 400;
        res.statusMessage = 'not good';
        res.end()
    }
});

router.get('/api/v1/food', (req, res) => {
    if(req.url.query.id){
        makeStatusCode(res);
        let meal = req.url.query.id;
        res.write(`${meal}`);
        res.end();
    } else {
        res.stausCode = 400;
        res.statusMessage = 'not good';
        res.end()
    }
});


module.exports = {};