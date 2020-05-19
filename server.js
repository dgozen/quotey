const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//run when a client connects
io.on('connection', (socket) => {
	//All the emits have to be done here not outside...
	//All the connections are written within this

	console.log('new user online');
	socket.emit('message', 'Are you ready to quote?');

	//Broadcast when someone connects
	//Broadcast emit will send to all besides the one who is connecting
	socket.broadcast.emit('message', 'A quoter has joined online!');

	//Runs when a some disconnects
	socket.on('disconnect', () => {
		io.emit('message', 'A quoter has left');
	});

	//Listen for the clicked quote
	socket.on('quote', (quote) => {
		console.log(quote);
		io.emit('message', quote);
	});
});

//if there is a enviroment variable with a port
const PORT = 3000 || process.env.PORT;

//run a server with port number
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
