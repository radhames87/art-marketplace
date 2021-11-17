import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from './index.js';

describe('Certificate API endpoints', () => {
  let agent;
  beforeAll(() => {
    agent = request.agent(app.instance);
  });
  afterAll(async () => {
    return app.close();
  });

  test('should return the lists of certificates', async () => {
    const response = await agent.get('/certificates');
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeInstanceOf(Array);
  });
});
