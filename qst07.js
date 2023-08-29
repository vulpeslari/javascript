// sem arrow function

function vogal(word) {
    w = word.split('');
    v = ['a', 'e', 'i', 'o', 'u'];
    var cont = 0;
    for (var i = 0; i < word.length; i++){
        for (var j = 0; j < 5; j++){
            if (w[i] === v[j])
            cont = cont + 1;
        }
    }
    return cont;
}

// com arrow function
vogal2 = (word) => {
    w = word.split('');
    v = ['a', 'e', 'i', 'o', 'u'];
    var cont = 0;
    for (var i = 0; i < word.length; i++){
        for (var j = 0; j < 5; j++){
            if (w[i] === v[j])
            cont = cont + 1;
        }
    }
    return cont;

}

// chamada para linkar ao index.html (para teste)
var word = prompt('digite uma palavra: ');
alert(`há ` + vogal2(word) + ` vogais na palavra ${word}`);
