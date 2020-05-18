const getText = (item) => {
	const textContent = item.textContent;
	console.log(textContent);
};

let quotes = document.querySelectorAll('li');

quotes.forEach((item) =>
	item.addEventListener('click', function() {
		getText(item);
	})
);

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/twoPlayerPatrick.html');
});

http.listen(3000, () => {
	console.log('listening on *:3000');
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});
