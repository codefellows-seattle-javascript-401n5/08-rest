'use strict';

const router = require('../lib/router.js');

const getHTMLResponse = (res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
};

//home route
router.get('/', (req, res) => {
  getHTMLResponse(res);
  res.write('home');
  res.end();
});

//get id
router.get('/api/v1/students', (req, res) => {
  let idNum = req.query.id;
  if(idNum === null || idNum === undefined) {
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.write('Not Found');
    res.end();
  }
  else if(idNum === '') {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('Bad Request');
    res.end();
  }
  else {
    getHTMLResponse(res);
    res.write(`ID: ${idNum} was requested`);
    res.end();
  }
});

//post
router.post('/api/v1/students', (req, res) => {
  if(req.body === undefined || req.body === null) {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write(err);
    res.end();
  }
  else {
    getHTMLResponse(res);
    res.write(JSON.stringify(req.body));
    res.end();
  }
});

//put
router.put('/api/v1/students', (req, res) => {
  let idNum = req.query.id;
  if(!idNum) {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write(err);
    res.end();
  }
  else {
    getHTMLResponse(res);
    res.write(JSON.stringify(req.body));
    res.end();
  }
});

//delete
router.delete('/api/v1/students', (req, res) => {
  let idNum = req.query.id;
  getHTMLResponse(res);
  res.write(`ID: ${idNum} was deleted.`);
  res.end();
});



module.exports = {};