'use strict';

const parser = require('../src/lib/parser');

describe('Parser module', () => {

  it('should require a request object', () => {
    let req = undefined;
    return parser(req)
      .then(res => {
        false;
        console.log(res);
      })
      .catch(err => expect(err).toBeDefined());
  });

  it('should require a request object with a url', () => {
    let req = {};
    return parser(req)
      .then(res => {
        false;
        console.log(res); 
      })
      .catch( err => expect(err).toBeDefined() );
  });

  it('should return an object if given a url', () => {
    let req = { url: 'http://localhost' };
    return parser(req)
      .then(request => expect(typeof request.url).toEqual('object') )
      .catch(err => {
        false;
        console.log(err); 
      });
  });

  it('should identify the values in the query object', () => {
    let req = { method:'GET', url: 'http://localhost?a=b&c=d' };
    return parser(req)
      .then( request => {
        expect(request.url.query.a).toEqual('b');
        expect(request.url.query.c).toEqual('d');
      })
      .catch( console.error );
  });
});