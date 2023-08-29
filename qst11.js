// sem arrow function

function primo(num) {
    n = parseInt(num);
    if (n % 2 == 0)
        return "o número não é primo";
    else {
        return "o número é primo";
    }
}

// com arrow function
primo2 = (num) => {
    n = parseInt(num);
    if (n % 2 == 0)
        return "o número não é primo";
    else {
        return "o número é primo";
    }
}

// chamada para linkar ao index.html (para teste)
var num = prompt('digite um numero: ');
alert(primo2(num));
