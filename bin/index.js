const http = require('http');
const serveHandler = require('../app');

const PORT = 5000;

const server = http.createServer(serveHandler);
server.listen(PORT, () => {
    console.log('server  running at port 5000')
})
