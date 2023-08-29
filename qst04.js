// sem arrow function

function area(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    var aux = (a * b)/2;
    return aux;
}

// com arrow function

area2 = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    var aux = (a * b)/2;
    return aux;
}

// chamada para linkar ao index.html (para teste)
var base = prompt('forneça a base do triângulo: ');
var altura = prompt('forneça a altura do triângulo: ');
alert(`a área é ` + area2(base, altura));
