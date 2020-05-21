import sounds from '../sounds/yoda/yodaSounds';
console.log(sounds);

// var one = new Audio('/assests/sounds/yoda/Annoying.mp3');

const list = document.querySelector('ul');
const length = list.children.length;
for (let i = 0; i < length; i++) {
	(function(index) {
		list.children[i].onclick = function() {
			console.log(sounds[i]);
			// one.play();
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
