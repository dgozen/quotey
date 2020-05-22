import audioArray from '../sounds/audioArray.js';

const socket = io();

//This is the quote coming from the server
socket.on('message', (message) => {
	printToScreen(message);
});

socket.on('index', (index) => {
	audioArray[index].play();
});

const getText = (item, index) => {
	const textContent = item.textContent;
	//Emit the quote to the server
	const patrickIndex = index + 17;
	console.log(patrickIndex);
	socket.emit('quote', textContent, patrickIndex);
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
