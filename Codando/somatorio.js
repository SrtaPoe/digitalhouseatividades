function somatoria (numero){

 var soma = 0;

   for(var i=0; i <= (numero + 1); i++){

   numero -= 1;    

   soma += numero;

 }

 return soma;

}

// a função soma os numero antecessores do numero dado