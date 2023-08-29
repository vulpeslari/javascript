// sem arrow function
function temHabilidade(skills) {
    for (var i = 0; i< skills.length; i++){
        if (skills[i] === "Javascript")
        return true;
        else
        return false;
    }
}

// com arrow function
temHabilidade2 = (skills) => {
    for (var i = 0; i< skills.length; i++){
        if (skills[i] === "Javascript")
        return true;
        else
        return false;
    }
}

// chamada para linkar ao index.html (para teste)
var skills = ["Javascript", "ReactJS", "ReactNative", "Angular"];
alert(temHabilidade(skills));
