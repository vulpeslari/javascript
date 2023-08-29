// sem arrow function

function endereco() {
    var endereco = {
        rua: "Av do CPA",
        numero: 1293,
        bairro: "Jardim Cuiabá",
        cidade: "Cuiabá",
        uf: "MT"
    }
    
    return "O usuário mora em " + endereco.cidade + "/" + endereco.uf 
            + ", no bairro " + endereco.bairro + ", na " + endereco.rua
            + ", nº " + endereco.numero + "."
 }

// com arrow function
endereco2 = () => {
    var endereco = {
        rua: "Av do CPA",
        numero: 1293,
        bairro: "Jardim Cuiabá",
        cidade: "Cuiabá",
        uf: "MT"
    }
    
    return "O usuário mora em " + endereco.cidade + "/" + endereco.uf 
            + ", no bairro " + endereco.bairro + ", na " + endereco.rua
            + ", nº " + endereco.numero + "."
 }

// chamada para linkar ao index.html (para teste)
alert(endereco2());
