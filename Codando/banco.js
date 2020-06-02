function possoIrAoBanco(diaDaSemana, horaAtual){
    return (!(diaDaSemana == "Sábado" || diaDaSemana == "Domingo") && (horaAtual >= 9 && horaAtual <= 15));
}

//rimeiro de tudo precisamos saber que um banco está fechado quando é fim de semana (sábado ou domingo) e não está no horário bancário (9 às 15hs).