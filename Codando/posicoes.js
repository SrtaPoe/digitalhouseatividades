var posicoes = ["nada", "ouro", "prata", "bronze"];

function medalhaDeAcordoComPosto(numero){

 if( numero >= posicoes.length ) return "nada";

 return posicoes[numero];

}

//retornar posicoes em uma competição