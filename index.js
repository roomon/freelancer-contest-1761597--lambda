/**
 * Mock AWS API Gateway
 */
require('dotenv').config();
const lambda = require('./lambda');
require('http')
  .createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let stream;
    switch (req.url) {
      case '/bar-chart':
        stream = await lambda.barchart();
        res.write(JSON.stringify(stream));
        res.end();
        break;

      case '/line-chart':
        stream = await lambda.linechart();
        res.write(JSON.stringify(stream));
        res.end();
        break;

      case '/pie-chart':
        stream = await lambda.piechart();
        res.write(JSON.stringify(stream));
        res.end();
        break;

      case '/gauge':
        stream = await lambda.gauge();
        res.write(JSON.stringify(stream));
        res.end();
        break;

      case '/map':
        stream = await lambda.map();
        res.write(JSON.stringify(stream));
        res.end();
        break;
    }
  })
  .listen(4444);
