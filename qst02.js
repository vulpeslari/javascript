// sem arrow function

function cubo(num) {
    n = parseInt(num);
    var aux = n * n * n;
    return aux;
}

// com arrow function
cubo2 = (num) => {
    n = parseInt(num);
    var aux = n * n * n;
    return aux;
}

// chamada para linkar ao index.html (para teste)
var num = prompt('digite um numero: ');
alert(`o cubo do numero ${num} é ` + cubo2(num));
