var express = require('express')
var options = {
    debug: true,
    allow_discovery: true
}
var app = express()

app.get('/', function(req, res) {
	res.send('Hello World!');
});
// … Configure Express, and register necessary route handlers
srv = app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

peerServer = require('peer').ExpressPeerServer(srv, {
	debug: true,
	allow_discovery: true
})
app.use('/peerjs', peerServer)

peerServer.on('connection', function(id) {
    console.log("O ID: " + id + "se conectou")
  // console.log(srv._clients)
});

srv.on('disconnect', function(id) {
    console.log(id + "deconnected")
});

// var app = express();
// var server = app.listen(8000);
// var q = peer.ExpressPeerServer(server, options);
// app.use('/peer', q);
// q.on('connection', function (id) {
//     console.log('user with ', id, 'connected');
// });
