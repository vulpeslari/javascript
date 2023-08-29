// sem arrow function

function soma(num) {
    var cont = 0;
    for (var i = 0; i < num.length; i++){
        cont = cont + num[i];
    }
    return cont;
}

// com arrow function
soma2 = (num) => {
    var cont = 0;
    for (var i = 0; i < num.length; i++){
        cont = cont + num[i];
    }
    return cont;
}

// chamada para linkar ao index.html (para teste)
var num = [1, 2, 3, 4, 5, 6];
alert(soma2(num));
