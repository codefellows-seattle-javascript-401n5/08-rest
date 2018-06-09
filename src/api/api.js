'use strict';

const router = require('../lib/router.js');

router.get('/', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'good';
    let name = req.query.name || '';
    res.write(`Hello ${name}`);
    res.end();
});

router.post('/data', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'good';
    res.write(JSON.stringify(req.body));
    res.end();
});

module.exports = {};