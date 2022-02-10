import Fastify from 'fastify';
import routes from './routes.js';

const fastify = Fastify({
  logger: { prettyPrint: true }
});
const PORT = 3000;

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen(PORT);
    console.log('Listening on port', PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
