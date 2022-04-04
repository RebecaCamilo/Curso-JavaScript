// Factory function = função fábrica

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomecompleto() {
            return (this.nome + ' ' + this.sobrenome);
        },

        // Setter
        set nomecompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            // return `${nome} está falando ${assunto}.`; //usa o nome que vem como argumento (é mais performático)
            return `${this.nome} está falando ${assunto}. ${peso}`; //usa o nome que está guardado na chave 'nome' do objeto
        },

        altura,
        peso,

        // Getter
        get imc() {  // quando usa-se o 'get' o metodo 'finge' ser um atributo
            const indice = this.peso / (this.altura) ** 2;
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Ana', 'Maria', 1.8, 80);
console.log(p1.imc);
console.log(p1.fala('oi'));
// console.log(p1.nomecompleto());
p1.nomecompleto = 'Joaquina da Silva Santos'
console.log(p1.nomecompleto);
