const yodaBtn = document.getElementById('yodaBtn');
const patrickBtn = document.getElementById('patrickBtn');
const backdrop = document.getElementById('backdrop');
const playerSelection = document.getElementById('selection');
const singleBtn = document.getElementById('singleBtn');
const doubleBtn = document.getElementById('doubleBtn');

const character = {
	name: 'not set yet',
};

const toggleWindowHandler = () => {
	backdrop.classList.toggle('visible');
	playerSelection.classList.toggle('hidden');
};

const setCharacter = (name) => {
	character.name = name;
	console.log(character.name);
};

backdrop.addEventListener('click', toggleWindowHandler);
yodaBtn.addEventListener('click', () => {
	setCharacter('Yoda'), toggleWindowHandler();
});
patrickBtn.addEventListener('click', () => {
	setCharacter('Patrick'), toggleWindowHandler();
});
singleBtn.onclick = () =>
	(location.href = `./singlePlayer${character.name}.html`);
doubleBtn.onclick = () => (location.href = `./twoPlayer${character.name}.html`);
