'use strict';

const router = require('../src/lib/router.js');

describe('Router module', () => {

  it('can registers routes of multiple types', () => {
    router.get('/', () => true);
    router.put('/', () => true);
    router.post('/', () => true);
    router.patch('/', () => true);
    router.delete('/', () => true);
    expect( router.routes.GET['/']).toBeDefined();
    expect( router.routes.PUT['/']).toBeDefined();
    expect( router.routes.POST['/']).toBeDefined();
    expect( router.routes.PATCH['/']).toBeDefined();
    expect( router.routes.DELETE['/']).toBeDefined();
  });

  it('can create multiple routes of the same type', () => {
    router.routes.GET = {};
    router.get('/a', () => true);
    router.get('/b', () => true);
    router.get('/c', () => true);
    expect( Object.keys(router.routes.GET).length ).toEqual(3);
  });

  it('can route get requests', () => {
    let expected = 'get/student';
    router.get('/student', () => expected);
    let req = { method: 'GET', url: 'http://localhost/student?id=120' };
    let res = {};
    return router.route(req,res)
      .then( result => expect(result).toEqual(expected));
  });
  
});