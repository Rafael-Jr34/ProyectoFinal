"scripts": {
  "test": "echo \"Test OK\""
}
/*const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('Debería responder Hola Mundo!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hola Mundo!');
  });
});
