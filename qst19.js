// sem arrow function

function maior(num) {
    var strings = [];
    for (var i = 0; i< parseInt(num); i++){
        var frase = prompt('digite uma palavra: ');
        strings.push(frase);
    }
    var maior_string = strings[0];
    for (var i = 1; i < strings.length; i++){
        if (strings[i].length > maior_string.length)
        maior_string = strings[i];
    }
    return maior_string;
}

// com arrow function
maior2 = (num) => {
    var strings = [];
    for (var i = 0; i< parseInt(num); i++){
        var frase = prompt('digite uma palavra: ');
        strings.push(frase);
    }
    var maior_string = strings[0];
    for (var i = 1; i < strings.length; i++){
        if (strings[i].length > maior_string.length)
        maior_string = strings[i];
    }
    return maior_string;
}

// chamada para linkar ao index.html (para teste)
var num = prompt("digite a quantidade de strings s serem coletadas: ");
alert(`a maior palavra é ` + maior2(num));
