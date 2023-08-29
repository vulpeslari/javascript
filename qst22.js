// sem arrow function

function reversed(text) {
    return text.split('').reverse().join('');
}

// com arrow function
reversed2 = (text) => {
    return text.split('').reverse().join('');
}

// chamada para linkar ao index.html (para teste)
var text = prompt("forneça o array: ");
alert(`o inverso de ${text} é ` + reversed2(text));
