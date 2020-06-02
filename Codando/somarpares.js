function somaDosPares(x){
    let soma = 0;
    for(let i = 2; i <= x; i += 2){                
          soma = soma + i;
    }
    return soma;
}

//soma os pares de determinado intervalo dado