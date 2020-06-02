let idade = 19;
let acesso = '';

if (idade<16) {
    acesso = 'não permitido';
}else if (idade >= 16 && idade <= 18) {
    acesso = 'permitido apenas com acompanhante maior de idade';
} else {
    acesso = 'permitido';
    }
 

console.log(acesso)