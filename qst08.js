// sem arrow function

function montante(capital, juros, tempo) {
    var c = parseFloat(capital);
    var i = (parseFloat(juros))/100;
    var t = parseInt(tempo);
    var aux = c * Math.pow(1 + i, t);
    return aux;
}

// com arrow function
montante2 = (capital, juros, tempo) => {
    var c = parseFloat(capital);
    var i = (parseFloat(juros))/100;
    var t = parseInt(tempo);
    var aux = c * Math.pow(1 + i, t);
    return aux;
}


// chamada para linkar ao index.html (para teste)
var capital = prompt('forneça o capital: ');
var taxa = prompt('forneça o valor da taxa de juros mensal: ');
var tempo = prompt('forneça a quantidade de tempo em meses: ');
alert("o montante final é de " + montante2(capital, taxa, tempo).toFixed(2));
