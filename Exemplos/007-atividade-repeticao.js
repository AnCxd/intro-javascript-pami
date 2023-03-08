/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

// recebe o valor inicial e final do usuário
let entrada = require('prompt-sync')();

let v1 = entrada ('Digite o valor inicial: ');
let v2 = entrada ('Digite o valor final: ');

let valorinicial = parseInt(v1);
let valorfinal = parseInt(v2);

// verifica se o valor inicial é menor que o final
if (valorinicial < valorfinal){
    // contador crescente
    for (let i = valorinicial; i <= valorfinal; i++) {
        console.log(i);
    }
} else if (valorinicial > valorfinal) {
    //contador decrescente
    for (let i = valorinicial; i >= valorfinal; i --){
        console.log(i);
    }
}else {
    //valores iguais
    console.log("Os valores são iguais.");
}