// sem arrow function

function soma(num) {
    var soma = 0;
    var n = num.split("");
    for (var i = 0; i < n.length; i++){
        soma = soma + parseInt(n[i]);
    }
    return soma;
}

// com arrow function
soma2 = (num) => {
    var soma = 0;
    var n = num.split("");
    for (var i = 0; i < n.length; i++){
        soma = soma + parseInt(n[i]);
    }
    return soma;
}

// chamada para linkar ao index.html (para teste)
var num = prompt("digite um número: ")
alert(`a soma dos dígitos de ${num} é `+ soma2(num));
