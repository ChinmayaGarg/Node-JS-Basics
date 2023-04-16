const http = require('http');

http.createServer();

/*

createServer takes a so called request listener as an arguement.
A request listener is simply a function that will execute for every incoming request.
Hover over createServer to see its definition:
function createServer<typeof http.IncomingMessage, typeof http.ServerResponse>(
	requestListener?: http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined): http.Server<...> (+1 overload)

*/
