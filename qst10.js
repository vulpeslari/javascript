// sem arrow function

function freq(word, char) {
    w = word.split('');
    var cont = 0;
    for (var i = 0; i < word.length; i++){
            if (w[i] === char)
            cont = cont + 1;
        }
    return cont;
}

// com arrow function
freq2 = (word, char) => {
    w = word.split('');
    var cont = 0;
    for (var i = 0; i < word.length; i++){
            if (w[i] === char)
            cont = cont + 1;
        }
    return cont;
}

// chamada para linkar ao index.html (para teste)
var word = prompt('digite uma palavra: ');
var char = prompt('digite um caracter: ');
alert(`a quantidade de vezes que ${char} aparece em ${word} é ` +  freq2(word, char));
