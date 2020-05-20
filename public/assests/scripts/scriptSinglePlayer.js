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
