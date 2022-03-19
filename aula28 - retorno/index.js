// return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}

const somaExpression = function (a, b) {
    return a + b;
};

const somaArrow = (a, b) => a + b;

// console.log(somaArrow(1, 2));

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
// });

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }; // Igual a {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa('Rebeca', 'Maria');
console.log(p1);
console.log(typeof p1);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));




function criaMultiplicador(m) {
    // m está nessa função
    // function multiplicacao(n) {
    //     return n * m;
    // }
    // return multiplicacao;
    return function(n) {
        return n * m;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));


