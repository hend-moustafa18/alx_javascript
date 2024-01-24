function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add a paragraph to the body
    var welcomeParagraph = document.createElement('p');
    welcomeParagraph.id = 'welcomeText';
    welcomeParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);


    // Add buttons to the body
    addButton('Spooky', spooky);
    addButton('Dark mode', darkMode);
    addButton('Scream mode', screamMode);
}

function addButton(text, clickHandler) {
    var button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    document.body.appendChild(button);
}

// Call the main function when the page loads
main();
