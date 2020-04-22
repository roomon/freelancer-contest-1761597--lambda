/**
 * Mock AWS API Gateway
 */
require('dotenv').config();
const lambda = require('./lambda');
require('http')
  .createServer(async (req, res) => {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
    let stream;
    switch (req.url) {
      case '/bar-chart':
        stream = await lambda.barchart();
        res.end(JSON.stringify(stream));
        break;

      case '/line-chart':
        stream = await lambda.linechart();
        res.end(JSON.stringify(stream));
        break;

      case '/pie-chart':
        stream = await lambda.piechart();
        res.end(JSON.stringify(stream));
        break;

      case '/gauge':
        stream = await lambda.gauge();
        res.end(JSON.stringify(stream));
        break;

      case '/map':
        stream = await lambda.map();
        res.end(JSON.stringify(stream));
        break;
    }
  })
  .listen(4444);

/**
 * Mock AWS WebSocket API Gateway
 */
// const server = require('http');
const socketio = require('socket.io')(5555);
// server.createServer();
// server.listen(5555);
// const io = socketio(server);

require('./models/Income')
  .watch()
  .on('change', (doc) => {
    const updated = { ...doc.fullDocument };
    delete updated['_id'];
    body = {
      key: doc.documentKey._id,
      updatedDocument: updated,
      ns: doc.ns,
    };
    socketio.emit('barchart-replace', body);
  });

require('./models/Visitor')
  .watch()
  .on('change', (doc) => {
    const updated = { ...doc.fullDocument };
    delete updated['_id'];
    body = {
      key: doc.documentKey._id,
      updatedDocument: updated,
      ns: doc.ns,
    };
    socketio.emit('linechart-replace', body);
  });

require('./models/Oil')
  .watch()
  .on('change', (doc) => {
    const updated = { ...doc.fullDocument };
    delete updated['_id'];
    body = {
      key: doc.documentKey._id,
      updatedDocument: updated,
      ns: doc.ns,
    };
    socketio.emit('piechart-replace', body);
  });

require('./models/Usage')
  .watch()
  .on('change', (doc) => {
    const updated = { ...doc.fullDocument };
    delete updated['_id'];
    body = {
      key: doc.documentKey._id,
      updatedDocument: updated,
      ns: doc.ns,
    };
    socketio.emit('gauge-replace', body);
  });

require('./models/Country')
  .watch()
  .on('change', (doc) => {
    const updated = { ...doc.fullDocument };
    delete updated['_id'];
    body = {
      key: doc.documentKey._id,
      updatedDocument: updated,
      ns: doc.ns,
    };
    socketio.emit('map-replace', body);
  });
