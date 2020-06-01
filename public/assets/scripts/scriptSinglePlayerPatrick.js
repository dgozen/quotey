import audioArray from '../sounds/audioArray.js';

const list = document.querySelector('ul');
const length = list.children.length;
for (let i = 0; i < length; i++) {
	(function(index) {
		list.children[i].onclick = function() {
			audioArray[i + 17].play();
		};
	})(i);
}

const printToScreen = (quote) => {
	const printScreen = document.getElementById('printScreen');
	printScreen.innerHTML = quote;
};

const getText = (item) => {
	const textContent = item.textContent;
	printToScreen(textContent);
};

let quotes = document.querySelectorAll('li');
quotes.forEach((item) =>
	item.addEventListener('click', function() {
		getText(item);
	})
);
