let container = document.getElementById('container');

let paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

let header3 = document.createElement('h3');
header3.textContent = "Hey I'm blue h3!";
header3.style.color = 'blue';

let secondContainer = document.createElement('div');
let secondContainerTitle = document.createElement('h1');
secondContainerTitle.textContent = "I'm in a div";
let secondContainerParagraph = document.createElement('p');
secondContainerParagraph.textContent = "ME TOO!";

secondContainer.appendChild(secondContainerTitle);
secondContainer.appendChild(secondContainerParagraph);

container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(secondContainer);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
