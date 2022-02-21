
// Atribuição via desestruturação (de objetos)

const pessoa = {
    // nome: 'Rebeca',
    sobrenome: 'Maria',
    idade: 28,
    endereco: {
        // rua: 'Silvino Lopes',
        numero: 410
    }
};

// const nome = pessoa.nome;
const { nome: n = 'oi', apelido = 'becks', sobrenome, idade } = pessoa; //Extrai do objeto pessoa a chave sobrenome e cria a variavel com mesmo nome
console.log(n, sobrenome, idade, apelido);


// const { endereco } = pessoa;
const { endereco: { rua: r = 'Beira Rio', numero}, endereco } = pessoa;
console.log(r, numero, endereco);


const { nome, ...resto} = pessoa;
console.log(nome, resto);