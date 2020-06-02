function eNumeroDaSorte(num){
return (num >= 0) && ((num % 2 == 0) || (num % 3 == 0)) && (num != 15);  
}

//    é positivo
//é um múltiplo de 2 ou 3
//não é 15