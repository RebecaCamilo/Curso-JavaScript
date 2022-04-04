// Construtora -> Pessoa (new)
// Molde para gerar novos objetos

function Pessoa(nome, sobrenome) {
    // atributo privado
    const ID = 123;
    // metodo privado
    const metodoInterno = function() {
        // ex: validar cpf
    };

    // atributos ou metodos publicos (utilizando this.) pois podem ser acessados fora da função construtora.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' diz: sou um metodo');
    };
}

const p1 = new Pessoa('Ana', 'Luiza');
const p2 = new Pessoa('Miina', 'Miafuji');

console.log(p2.nome);

p1.metodo();