import { FastifyInstance } from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import { execAll } from '../db/index.js';

async function metricRoutes(fastify: FastifyInstance) {
  fastify.get('/devices', async function (request: FastifyRequest, reply: FastifyReply) {
    const devices = await execAll('SELECT * FROM devices;')
    return { devices }
  })
}

export default metricRoutes;
