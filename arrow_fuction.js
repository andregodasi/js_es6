/**
 * Arrow functions
 * è um modo de escrever funções com um sintaxe mais enxuta, veja o exemplo
 * 
 */

// normal 
var dobroDoValor = function(valor) {
    return valor * 2;
}

/* arrow function etapa um, podemos retirar a palavra function
var dobroDoValor = (valor) {
    return valor * 2;
}

*/

/* como recebe somente um parametro de entrada podemos tirar os parenteses
var dobroDoValor = valor {
    return valor * 2;
}

*/

/* como só tem uma linha podemos tirar as chaves e o return
var dobroDoValor = valor {
    return valor * 2;
}

*/

// arrow function es6
var dobroDoValorArrow = numero => numero * 2

console.log(dobroDoValor(33))
console.log(dobroDoValorArrow(33))

