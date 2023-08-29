// sem arrow function

function skills() {
    var usuarios = [{
        nome: "Douglas",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Elton",
        habilidades: ["PHP", "Ruby on Rails", "Laravel"]
    }];

    return "O " + usuarios[0].nome + " possui as habilidades: " + usuarios[0].habilidades +
            "\nO " + usuarios[1].nome + " possui as habilidades: " + usuarios[1].habilidades;
}

// com arrow function
skills2 = () => {
    var usuarios = [{
        nome: "Douglas",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Elton",
        habilidades: ["PHP", "Ruby on Rails", "Laravel"]
    }];

    return "O " + usuarios[0].nome + " possui as habilidades: " + usuarios[0].habilidades +
            "\nO " + usuarios[1].nome + " possui as habilidades: " + usuarios[1].habilidades;
}

// chamada para linkar ao index.html (para teste)
alert(skills2());
