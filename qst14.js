// sem arrow function

function positivo(num) {
    var positivo = [];
    for (var i = 0; i < num.length; i++){
        if (num[i] > 0)
            positivo.push(num[i]);
    }
    return positivo;
}

// com arrow function
positivo2 = (num) => {
    var positivo = [];
    for (var i = 0; i < num.length; i++){
        if (num[i] > 0)
            positivo.push(num[i]);
    }
    return positivo;
}

// chamada para linkar ao index.html (para teste)
var num = [-4, -3, -2, -1, 1, 2, 3, 4, 5];
alert(positivo2(num));
