// sem arrow function

function circulo(raio) {
    r = parseInt(raio);
    var area = 3.14 * raio * raio;
    var perimetro = 2 * 3.14 * raio;
    return [area, perimetro];
}

// com arrow function

circulo2 = (raio) => {
    r = parseInt(raio);
    var area = 3.14 * raio * raio;
    var perimetro = 2 * 3.14 * raio;
    return [area, perimetro];
}

// chamada para linkar ao index.html (para teste)
var raio = prompt('forneça o raio do círculo: ');
const medidas = circulo2(raio);
alert(`a área é ` + medidas[0].toFixed(2) + ` e o perimetro é ` + medidas[1].toFixed(2));
10