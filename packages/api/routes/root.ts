import { FastifyInstance } from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";

async function rootRoutes(fastify: FastifyInstance) {
  fastify.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
    return { root: true }
  })
};

export default rootRoutes;
