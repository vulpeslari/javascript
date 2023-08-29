// sem arrow function

function celsius(num) {
    n = parseInt(num);
    var aux = 5 * (n-32)/9;
    return aux;
}

celsius2 = (num) => {
    n = parseInt(num);
    var aux = 5 * (n-32)/9;
    return aux;
}

// chamada para linkar ao index.html (para teste)
var fahrenheint = prompt('digite a temperatura em F: ');
alert(`em celsius, ${fahrenheint}F é ` + celsius2(fahrenheint) + `C`);
