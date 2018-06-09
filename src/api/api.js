'use strict';

const router = require('../lib/router.js');

/**
 * GET Route (/)
 * Accepts an optional "name" query string parameter and says Hello
 * test with httpie:
 *     http http://localhost:8080
 *     http http://localhost:8080?name=John
 */
router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/cats', (req, res) => {

  const id = req.query.id;

  if(id === 'notfound'){
    res.statusCode = 404;
    res.statusMessage = 'not found';
    res.write('not found');
    res.end();
  } else if(id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${id} was requested`);
    res.end();
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write('bad request');
    res.end();
  }
});


/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */
router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

module.exports = {};