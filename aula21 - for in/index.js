const frutas = ['maçã', 'pera', 'uva', 'morango', 'banana', 'tangerina'];

// for in: lê os índices de um array ou as chances de um objeto
for (let i in frutas) {
    console.log(frutas[i]);
}

console.log('');

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Lins',
    idade: 20
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}

console.log('');

const nome = 'Rebeca Maria';

//for of: faz a iteração com valores, não com os índices
for (let valor of nome) {
    console.log(valor);
}

console.log('');

const nomes = ['Maria', 'Jana'];

for (let valor of nomes) {
    console.log(valor);
}

