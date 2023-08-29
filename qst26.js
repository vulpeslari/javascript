// sem arrow function

function experiencia(year) {
    var year = parseInt(year);
    if (year <= 1)
        return "Junior";
    else if (year > 1 && year <= 3)
        return "Pleno";
    else if (year > 3 && year <= 6)
        return "Senior";
    else if (year >= 7)
        return "Grão Mestre Jedi";
}

// com arrow function
experiencia2 = (year) => {
    var year = parseInt(year);
    if (year <= 1)
        return "Junior";
    else if (year > 1 && year <= 3)
        return "Pleno";
    else if (year > 3 && year <= 6)
        return "Senior";
    else if (year >= 7)
        return "Grão Mestre Jedi";
}

// chamada para linkar ao index.html (para teste)
var year = prompt("forneça a quantidade de anos de estudo: ");
alert(`o usuário é ` + experiencia(year));
