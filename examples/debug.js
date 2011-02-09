
/**
 * Module dependencies.
 */

var engine = require('../')
  , http = require('http');

var server = http.createServer(function(req, res){
  console.log('%s %s', req.method, req.url);
  var body = 'Hello World';
  res.writeHead(200, { 'Content-Length': body.length });
  res.end(body);
});

engine(server)
  .use(engine.logger('logs', 'debug'))
  .use(engine.debug())
  .listen(3000, '127.0.0.1');