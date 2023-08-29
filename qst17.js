// sem arrow function

function fibonacci(num) {
    var n = [];
    for (var i = 0; i < num; i++){
        if (i < 2){
            n[i] = i;
        }
        else if (i == 2){
            n[i] = 1;
        }
        else {
            n[i] = n[i - 1] + n[i - 2];
        }
        
    }
    return n;
}

// com arrow function
fibonacci2 = (num) => {
    var n = [];
    for (var i = 0; i < num; i++){
        if (i < 2){
            n[i] = i;
        }
        else if (i == 2){
            n[i] = 1;
        }
        else {
            n[i] = n[i - 1] + n[i - 2];
        }
        
    }
    return n;
}

// chamada para linkar ao index.html (para teste)
alert(fibonacci2(10));
