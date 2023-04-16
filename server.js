const http = require('http');

// function reqListener(req, res) {}

// http.createServer(reqListener);

// Passing requestListener using annonymous function
// http.createServer(function (req, res) {});

// Passing requestListener using arrow function
http.createServer((req, res) => {});

/*

createServer takes a so called request listener as an arguement.
A request listener is simply a function that will execute for every incoming request.
Hover over createServer to see its definition:
function createServer<typeof http.IncomingMessage, typeof http.ServerResponse>(
	requestListener?: http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined): http.Server<...> (+1 overload)

The function passed as an arguement to createServer takes in 2 parameters as described above:
1. typeof http.IncomingMessage, 
2. typeof http.ServerResponse

Another way to pass a requestListener is by using annonymous function.

requestListener is a callback function because it is called by nodejs whenever a request reaches our server.

* Event Driven Architecture:
The node will execute this requestListener function, passed as arguement in http.createServer, whenever a request reasches our server.
This is a event-driven architecture, that nodejs uses heavily.
We work a lot with such setups or such code snippets where we tell node if X happens, do Y, as in above case if request comes please execute requestListener. 
*/
