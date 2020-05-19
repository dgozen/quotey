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
