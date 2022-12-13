import { FastifyInstance } from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import { execAll, findDevice } from '../db/index.js';

declare module 'fastify' {
  interface FastifyRequest {
    device: {
      id: number,
      name: string
    }
  }
}

async function metricRoutes(fastify: FastifyInstance) {
  const paramSchema = {
    type: 'object',
    additionalProperties: false,
    required: [ 'id' ],
    properties: { id: { type: 'string'} }
  };

  const responseShema = {
    metrics: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number'},
          device_id: { type: 'number'},
          metric_name: { type: 'string'},
          fromts: { type: 'number'},
          tots: { type: 'number'},
          avg: { type: 'number'},
          max: { type: 'number'},
          min: { type: 'number'}
        }
      }
    }
  }

  fastify.addHook('preHandler', async (request: FastifyRequest<{Params: { id: string }}>, reply: FastifyReply) => {
    const device = await findDevice(request.params.id)
    if (!device) {
      return reply.code(404).send({ device: 'Device not found' });
    }

    request.device = device;
  })

  fastify.get('/metrics', { schema: { params: paramSchema, response: { 200: responseShema }} }, async function (request: FastifyRequest, reply: FastifyReply) {
    const metrics = await execAll('SELECT * FROM metrics WHERE device_id = ? LIMIT 10;', [request.device.id]);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ metrics });
  })
}

export default metricRoutes;
