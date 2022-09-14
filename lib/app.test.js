import request from 'supertest';
import app from './app.js';
import { server } from '../server.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('GET will return objects from their array', async () => {
  await request(app).get('/api/candies');
});