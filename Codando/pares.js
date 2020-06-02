function passandoPelosPares(){
   for (var i = 0; i<=6; i++){
      if(i%2==0||i%4==2||i%6==4||i%8==6){
         console.log("aqui eu tenho o valor de " + i); 
      } 
   }
}

//funcao que mostra uma mensagem com os numeros pares de 0 a 6