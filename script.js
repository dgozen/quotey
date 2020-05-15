const yodaBtn = document.getElementById('yodaBtn');
const patrickBtn = document.getElementById('patrickBtn');
const backdrop = document.getElementById('backdrop');
const playerSelection = document.getElementById('selection');

const toggleWindow = () => {
	backdrop.classList.toggle('visible');
	playerSelection.classList.toggle('hidden');
};

backdrop.addEventListener('click', toggleWindow);
yodaBtn.addEventListener('click', toggleWindow);
patrickBtn.addEventListener('click', toggleWindow);
