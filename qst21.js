// sem arrow function

function wordcount(text) {
    var count = text.split('');
    var cont = 0;
    for (var i = 0; i < count.length; i++){
        if (count[i] != ' ')
        cont = cont + 1;

    }
    return cont;
}

// com arrow function
wordcount2 = (text) => {
    var count = text.split('');
    var cont = 0;
    for (var i = 0; i < count.length; i++){
        if (count[i] != ' ')
        cont = cont + 1;

    }
    return cont;
}


// chamada para linkar ao index.html (para teste)
var text = prompt("digite um texto: ");
alert(`quantidade de palavras: ` + wordcount2(text));
