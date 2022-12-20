const button = document.getElementById('button');
const text = document.getElementsByTagName('p')[0];
button.onclick = () => {
	text.classList.toggle('hidden-text');
	button.innerText === 'hide text' ? button.innerText = 'show text' : button.innerText = 'hide text';
};