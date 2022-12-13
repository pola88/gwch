import { FastifyInstance } from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import { execAll } from '../db/index.js';

async function devicesRoutes(fastify: FastifyInstance) {
  fastify.get('/devices', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            devices: {
              type: 'array',
              items: {
                type: 'object',
                required:  ['id', 'name'],
                properties: {
                  id: { type: 'number' },
                  name: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  },async function (request: FastifyRequest, reply: FastifyReply) {
    const devices = await execAll('SELECT * FROM devices;')

    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ devices });
  })
}

export default devicesRoutes;
