var primos = new Array;
var elementos = new Array;
for (var i = 1 ; i < 1000; i++) {
    elementos.push(true);
}
for (var i = 2; i <= 1000; i++) {
    if (elementos[i]) {
        for (var x = i * i; x < 1000; x += i) {
            elementos[x] = false;
        }
    }
}
for (var i = 2; i < 1000; i++) {
    if (elementos[i]) {
        primos.push(i);
    }
}
for (i = 0; i < primos.length; i++){
    console.log(primos[i]);
}