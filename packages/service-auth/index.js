let express = require('express');
let api = require('./api-service-auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', api);

const port = process.env.API_SERVER_PORT || 3000;
const serviceName = process.env.API_SERVER_NAME || 'service-auth';

app.listen(port, function () {
  console.info(`Service:[${serviceName}] is running on PORT: [${port}]`);
});

