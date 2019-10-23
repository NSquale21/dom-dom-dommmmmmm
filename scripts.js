let container = document.createElement('main');
container.className = 'container';
document.body.appendChild(container);

let button = document.createElement('button');
button.className = 'btn btn-primary btn-lg d-block shadow mx-auto my-3';
button.textContent = 'Add Square';
container.appendChild(button);

let section = document.createElement('section');
section.className = 'row';
container.appendChild(section);

let clickCounter = 0;

button.addEventListener('click', () => {
	clickCounter++;
	let square = document.createElement('div');
	square.className = 'square d-flex justify-content-center align-items-center mx-3 mb-3 shadow text-white';
	let squareText = document.createTextNode(clickCounter);
	square.id = clickCounter;
	section.appendChild(square);
	square.addEventListener('mouseover', () => square.appendChild(squareText));
	square.addEventListener('mouseout', () => square.removeChild(squareText));
	square.addEventListener('click', () => square.style.backgroundColor = randomColor());
	square.addEventListener('dblclick', () => {
		if (square.id % 2 === 0) {
			if (square.nextSibling === null) {
				alert('No Sibling!');
			} else {
				square.nextSibling.remove();
			}
		} else {
			if (square.previousSibling === null) {
				alert('No Sibling!');
			} else {
				square.previousSibling.remove();
			}
		}
	});
});

function randomColor() {
	let colors = ['#e83131', '#ed5ae8', '#46c232', '#a337e6', '#53c1e6', '#f2b03d'];
	return colors[Math.floor(Math.random() * colors.length)];
}