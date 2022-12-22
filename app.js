const http=require('http');
const requesthandler=require('./routes');
const server = http.createServer(requesthandler.handler);
console.log(requesthandler.text); 
server.listen(3000);