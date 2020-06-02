function triplo(valor) {
    return valor * 3;
}

//função triplo que recebe um valor * 3

function triploDaSoma(a, b) {
    var soma = a + b;
    var resultado = triplo(soma);
    return resultado;
}

//invocando a funcao triplo para multiplicar com a soma da funcao triploDaSoma