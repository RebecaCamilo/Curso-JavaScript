// function retornaFuncao() {
//     const nome = 'Ana';
//     return function () {
//         return nome;
//     }
// }

// const funcao = retornaFuncao();
// console.dir(funcao);


function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Maria');
const funcao2 = retornaFuncao('Ana');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao, funcao2);