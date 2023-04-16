const http = require('http');

// function reqListener(req, res) {}

// http.createServer(reqListener);

// Passing requestListener using annonymous function
// http.createServer(function (req, res) {});

// Passing requestListener using arrow function
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(8080);

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

* server.listen
http.createServer returns a server, hence we have to store that in a new const (use const because we will never overwrite server).
Now we can use this stored server's .listen method to listen to request on the PORT specified in the server.listen().

.listen starts a process where nodejs will not immediately exit our script but where nodejs will instead keep this running to listen,
that is why method is named "listen" for incoming requests.

.listen takes a couple of arguements, 
the 1st is the port on which one wants to listen.
the second is hostName, by default this is the name of the machine running on, so that is localhost by default.
*/
