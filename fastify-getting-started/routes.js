
export default async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    console.log('Request', request.method, request.url);

    return { hello: 'world' }
  });

  fastify.get('/help', async (request, reply) => {
    console.log('Request', request.method, request.url);

    return 'Help page';
  });
}

// OR: module.exports = routes;
