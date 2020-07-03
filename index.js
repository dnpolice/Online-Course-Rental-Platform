const express = require('express');
const app = express();

const logger = require('./startup/logging');
require('./startup/unhandledRejections');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));