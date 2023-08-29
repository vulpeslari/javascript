// sem arrow function

function concatenar(array1, array2) {
    return array1.concat(array2);
}

// com arrow function
concatenar2 = (array1, array2) => {
    return array1.concat(array2);
}

// chamada para linkar ao index.html (para teste)
var array1 = prompt("digite o primeiro array: ");
var array2 = prompt("digite o segundo array: ");
alert(concatenar2(array1, array2));
