// A função definida com a palavra function tem uma palavra especial 'arguments' que sustenta todos os argumentos enviados (nao funciona em com arrow functions)
function funcao() {
    // console.log('Oie');
    console.log(arguments); // Os arguments são capturados
}

funcao('Valor', 2, 5, 6, 7, 100);

function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

soma(10, 2, 5, 6, 7, 100);


function teste(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

teste(1, 2, 3); // Se os argumentos não suprirem todos os parametros aceitos pela função, os parametros excedentes serão setados como undefined 


function soma2(x, y = 1, z = 2) {
    // y = y || 1;
    console.log(x + y + z);
}

soma2(10); // Assume o valor de y e z definido na função
soma2(2, 3); // Assume o valor de z definido na função
soma2(2, undefined, 20); // Assume o valor de y definido na função

// Parametros por desestruturação de objeto
function funcaoDesestruturacao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcaoDesestruturacao({nome: 'Rebeca', sobrenome: 'Maria', idade: 28});

let obj = {nome: 'Maria', sobrenome: 'Camilo', idade: 30};
funcaoDesestruturacao(obj);


// Parametros por desestruturação de array
function funcaoDesestruturacao2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcaoDesestruturacao2(['Bruno', 'Grau', 33]);

// O rest operator sempre deve ser o ultimo parametro da função
function conta(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, numeros);
    for(let n of numeros) {
        // console.log(acumulador);
        if (operador === '+') acumulador += n;
        if (operador === '-') acumulador -= n;
        if (operador === '*') acumulador *= n;
        if (operador === '/') acumulador /= n;
    }
    console.log(acumulador);
}

// conta('+', 0 [20, 30, 50]);
conta('+', 0, 20, 30, 50); // com o rest operator

// Function expression
const contaExpressao = function (operador, acumulador, ...numeros) {
    console.log(arguments);
};
contaExpressao('+', 0, 20, 30, 50); // com o rest operator

// Arrow Function
const contaArrow = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
    console.log(arguments); //nao captura os arguments (array de argumentos)
};
contaArrow('+', 0, 20, 30, 50); // com o rest operator

const contaArrow2 = (...args) => { // captura os arguments com o rest em arrow function
    console.log(args);
};
contaArrow2('+', 0, 20, 30, 50); // captura os arguments com o rest operator

