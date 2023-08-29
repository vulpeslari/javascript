// sem arrow function

function pares(x, y) {
    var x = parseInt(x);
    var y = parseInt(y);
    var par = [];
    for (var i = x; i <= y; i++){
        if (i % 2 == 0)
        par.push(i);

    }
    return par;
}

// com arrow function
pares2 = (x, y) => {
    var x = parseInt(x);
    var y = parseInt(y);
    var par = [];
    for (var i = x; i <= y; i++){
        if (i % 2 == 0)
        par.push(i);

    }
    return par;
}


// chamada para linkar ao index.html (para teste)
var x = prompt("início do intervalo: ");
var y = prompt("fim do intervalo: ")
alert(`os números pares no intervalo [${x}, ${y}] são: ` + pares2(x, y));
