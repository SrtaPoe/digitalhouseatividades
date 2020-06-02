function podeSeAposentar (idade, sexo, contr) {
 var masculino = 'M'
 var feminino = 'F'

return sexo==masculino && (idade >= 65) && (contr >= 30) || sexo==feminino && (idade >= 60) && (contr>=30)
}

// função para indicar se a pessoa pode ser aposentar
// mulher com 60 anos ou mais e com minimo 30 anos de contribuição
// homem com 65 anos ou mais e com minimo 30 anos de contribuição

// (||) usado para o valor boleano OU
// (!=) usado para o valor boleano Negação
// (&&) usado para o valor boleano E