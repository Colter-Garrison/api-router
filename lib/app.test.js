import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('GET /candies will return objects from their array', async () => {
  const res = await request(app).get('/api/candies');

  expect(res.status).toBe(200);
  expect.any(String);
});

it('GET /cats will return objects from their array', async () => {
  const res = await request(app).get('/api/cats');

  expect(res.status).toBe(200);
  expect.any(String);
});

it('GET /sauces will return objects from their array', async () => {
  const res = await request(app).get('/api/sauces');

  expect(res.status).toBe(200);
  expect.any(String);
});

it('POST /candies will return a new object', async () => {
  const addCandy = {
    name: 'twix',
    taste: 'like a twix',
  };
  const res = await request(app).post('/api/candies').send(addCandy);
  expect(res.status).toBe(200);
});

it('POST /cats will return a new object', async () => {
  const addCat = {
    name: 'Ghoul',
    cat: true,
  };
  const res = await request(app).post('/api/cats').send(addCat);
  expect(res.status).toBe(200);
});

it('POST /sauces will return a new object', async () => {
  const addSauce = {
    name: 'Relish',
    color: 'Green',
  };
  const res = await request(app).post('/api/sauces').send(addSauce);
  expect(res.status).toBe(200);
});

it('PUT /candies will change an object in the array', async () => {
  const updateCandy = {
    name: 'butterfingers'
  };
  const res = await request(app).put('/api/candies').send(updateCandy);
  expect(res.status).toBe(200);
});


it('PUT /cats will change an object in the array', async () => {
  const updateCat = {
    name: 'Momo'
  };
  const res = await request(app).put('/api/cats').send(updateCat);
  expect(res.status).toBe(200);
});


it('PUT /sauces will change an object in the array', async () => {
  const updateSauce = {
    name: 'mustard'
  };
  const res = await request(app).put('/api/sauces').send(updateSauce);
  expect(res.status).toBe(200);
});