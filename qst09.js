// sem arrow function

function fatorial(num) {
    var n = parseInt(num);
    if (n == 0 || n == 1)
        return 1;
    else {
        return n * fatorial(n - 1);
    }
}

// com arrow function
fatorial2 = (num) => {
    var n = parseInt(num);
    if (n == 0 || n == 1)
        return 1;
    else {
        return n * fatorial2(n - 1);
    }
}

// chamada para linkar ao index.html (para teste)
var num = prompt('digite um numero: ');
alert(`o fatorial de ${num} é ` +  fatorial2(num));
