/**
 * Definições de VAR, LET e CONST
 */

 /**
  * No exemplo abaixo irei mostrar o uso de VAR, as caractericas de VAR são:
  * 1. Quando declarado fora de um escopo de função ela assume o escopo global
  * 2. Quando declarado no escopo de uma função, assume escopo da função
  * 3. Quandodeclarado dentro de um bloco assume escopo global ou escopo de função
  * 4. Abaixo apresento um códifo cujo a variavel utilizando VAR irá sofre oque chamamos
  * de hosting, ela será declarado dentro do escopo do bloco if, porém ira ser elevada a escopo 
  * global
  * 5. Isso pode acarretar em erros, como por exemplo declarar um variavel e ela ser elevada 
  * para um escopo global, assim não tendo integridade na informação.
  */

var serie = 'friends'

if(true){
     var serie2 = 'game of thrones'
}

console.log(serie2)

// será impresso  =>game of thrones

/**
 * Let
 * 1. Let é um tipo de variavel que assume rigorosamente o escopo do bloco não sofrendo
 * hosting(elevação). ela ira fica dentro {} (chaves), somente irá assumir o escopo
 * global quando quando for declarado fora das {} no script
 */
var serie = 'friends'

if(true){
     let serie2 = 'game of thrones'
}

console.log(serie2)

//irá acontecer um erro, informando que a variavel não foi definida

var serie = 'friends'

if(true){
     let serie2 = 'game of thrones'
     console.log(serie2)
}

//irá ser impresso => game of thrones

/**
 * CONST
 * Const é um tipo de variavel que tem por caracterica ser constante, que irá receber 
 * um valor na sua inicialização e esse valor não poderá ser alterado.
 * Const assume escopo de bloco, igual a let.
 */

const serie = 'friends'

serie = 'supernatural'

if(true){
     let serie2 = 'game of thrones'
     console.log(serie2)
}
//Erro, pois tentamos modificar o valor de uma const

const serie = 'friends'

const serie3 = 'supernatural'

if(true){
     let serie2 = 'game of thrones'
     console.log(serie2)
}

console.log(serie)
console.log(serie3)

//será impresso => game of thrones
//                 friends
//                 supernatural

