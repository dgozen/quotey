import audioArray from '../sounds/audioArray.js';
const socket = io();

//This is the quote coming from the server
socket.on('message', (message) => {
	printToScreen(message);
});
//Here is the incoming index
socket.on('index', (index) => {
	audioArray[index].play();
});

//send to server
const getText = (item, index) => {
	const textContent = item.textContent;
	//Emit the quote to the server
	socket.emit('quote', textContent, index + 17);
};

const list = document.querySelector('ul');
const length = list.children.length;
for (let i = 0; i < length; i++) {
	(function(index) {
		list.children[i].onclick = function() {
			getText(list.children[i], i);
		};
	})(i);
}

//This is the function to output to the DOM
function printToScreen(quote) {
	const printScreen = document.getElementById('printScreen');
	printScreen.innerHTML = quote;
}
