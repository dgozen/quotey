const socket = io();

//This is the quote coming from the server
socket.on('message', (message) => {
	printToScreen(message);
});

const getText = (item) => {
	const textContent = item.textContent;
	//Emit the quote to the server
	socket.emit('quote', textContent);
};

let quotes = document.querySelectorAll('li');
quotes.forEach((item) =>
	item.addEventListener('click', function() {
		getText(item);
	})
);

//This is the function to output to the DOM
function printToScreen(quote) {
	const printScreen = document.getElementById('printScreen');
	printScreen.innerHTML = quote;
}
