const http = require('http');

function reqListener(req, res) {}

http.createServer(reqListener);

/*

createServer takes a so called request listener as an arguement.
A request listener is simply a function that will execute for every incoming request.
Hover over createServer to see its definition:
function createServer<typeof http.IncomingMessage, typeof http.ServerResponse>(
	requestListener?: http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined): http.Server<...> (+1 overload)

The function passed as an arguement to createServer takes in 2 parameters as described above:
1. typeof http.IncomingMessage, 
2. typeof http.ServerResponse
*/
