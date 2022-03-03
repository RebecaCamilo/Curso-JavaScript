// Declarações de função

falaOi();
// Ocorre o hoisting (A engine do js eleva a declaração dessa função para o topo do js)
function falaOi() {
    console.log('Oi!');
}

// First-class objects (as funções são objetos de primeira classe)
// Ou seja, pode-se tratar a função como dado ('Function expression')
// souUmDado(); // Da erro pois não ocorre o hoisting
const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();


function executaFuncao(funcao) {
    console.log('\nExecutando função abaixo:');
    funcao();
}

executaFuncao(souUmDado);
// setInterval(souUmDado, 1000);

// Arrow function (como se fosse uma function expression, porém mais curta)
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();


const obj = {
    // falar: function() {
    //     console.log('Estou falando');
    // },
    falar() {
        console.log('Estou falando!');
    }
}
obj.falar();








