const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Api',
    description: 'Description',
  },
  host: 'localhost:5000',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const outputFile = './swagger-output.json';
const routes = ['./index.js', './routes/*.js'];

swaggerAutogen(outputFile, routes, doc);
