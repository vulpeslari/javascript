// sem arrow function

function primo(num) {
    n = parseInt(num);
    if (n % 2 == 0)
        return false;
    else {
        return true;
    }
}

// com arrow function
primo2 = (num) => {
    n = parseInt(num);
    if (n % 2 == 0)
        return false;
    else {
        return true;
    }
}
5
// chamada para linkar ao index.html (para teste)
var num = prompt('digite um numero: ');
alert(primo2(num));
