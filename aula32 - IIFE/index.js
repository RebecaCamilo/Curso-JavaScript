// IIEF - Immediately invoked function expression

// toca o escopo global
// function qlqrCoisa() {
//     console.log(12345);
// }
// qlqrCoisa();

// escopo protegido do escopo global
(function(idade, peso) {
    const sobrenome = 'Ana';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Anaa'));
    }

    falaNome();
    console.log(idade, peso);
})(30, 80);

const nome = 'Maria';
console.log(nome);