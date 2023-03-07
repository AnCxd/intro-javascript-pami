let entrada = require('prompt-sync')();

let n1 = entrada('Digite sua primeira nota: ');
let n2 = entrada('Digite sua segunda nota: ');

let nota, media;

media = ((parseFloat(n1) + parseFloat(n2))/2);

if (media < 5){
    nota = 'I';
} 

if (media >= 5 && media < 6.5){
    nota = 'R';
}

if (media >= 6.5 && media < 8.5){
    nota = 'B';
}

if (media >= 8.5){
    nota = 'MB';
}

console.log('');
console.log('A sua nota final é ' + nota);
console.log('Fim do Programa');
entrada()