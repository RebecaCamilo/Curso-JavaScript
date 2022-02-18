let a = 'A';
let b = 'B';
let c = 'C';

// Atribuição via desestruturação

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);


// ... rest (operador rest - resto de algo), ... spread(operador spread - espalha algo)
const numeros = [10, 20, 30, 40, 50, 60];
const [primeiroNum, segundoNum, ...resto] = numeros;

console.log(primeiroNum, segundoNum);

console.log(resto);

const numeros2 = [100, 200, 300, 400, 500, 600, 700];
const [um, , tres, , cinco, , sete] = numeros2;

console.log(um, tres, cinco);


const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numbers[1][2]);
const [,[,,seis]] = numbers;
console.log(seis);
