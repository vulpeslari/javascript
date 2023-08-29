// sem arrow function

function maior(num) {
    var maior = 0;
    for (var i = 0; i < num.length; i++){
        if (num[i] > maior)
            maior = num[i];
    }
    return maior;
}

// com arrow function
maior2 = (num) => {
    var maior = 0;
    for (var i = 0; i < num.length; i++){
        if (num[i] > maior)
            maior = num[i];
    }
    return maior;
}

// chamada para linkar ao index.html (para teste)
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(maior2(num));
