/*
let n1 = 10;
let n2 = 2.5;
let n3 = 10.7825638678923457923;

console.log(n1.toString() + n2);

// n1 = n1.toString();

console.log(typeof n1);

console.log(n1.toString(2)); //muda para binario

console.log(n3.toFixed(2)); //mostra 2 casas decimais

console.log(Number.isInteger(n1)); //verifica se n1 é inteiro
console.log(Number.isInteger(n3));

let temp = n1 * 'oi';
console.log(Number.isNaN(temp));
*/

// Imprecisão em números pequenos - casas decimais (IEEE 754-2008)

let num1 = 0.7;
let num2 = 0.1;

console.log(num1+num2);
console.log((num1+num2).toFixed(3));

console.log(Number.isInteger(num1));

num1 += num2;
num1 += num2;
num1 += num2;
console.log(num1.toFixed(2));

console.log(num1);
num1 = Number(num1.toFixed(num1));
console.log(num1);
console.log(Number.isInteger(num1));