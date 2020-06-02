function naipeDeTruco(naipe) {

 return ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"].map(function(tipo) {

   return [tipo, naipe].join(' de ');

 });

}

console.log(naipeDeTruco('espadas'));

console.log(naipeDeTruco('copas'));

//escreva a função naipeDeTruco

