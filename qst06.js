// sem arrow function

function inverse(num) {
    n = num.toString().split('').reverse().join('');
    return parseInt(n);
}

// com arrow function

inverse2 = (num) => {
    n = num.toString().split('').reverse().join('');
    return parseInt(n);
}

// chamada para linkar ao index.html (para teste)
var num = prompt('digite um numero: ');
alert(`o numero ${num} invertido é ` + inverse2(num));
